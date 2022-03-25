import React, { ChangeEvent, useMemo, useState } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import theme from '../../ui/styles/Theme.module.scss'
import { GutterBox } from '../../ui/gutter-box'
import { getModeClassName } from '../../ui/utils/get-theme-class-name'
import { useWeb3React } from '@web3-react/core'
import { Button } from '../../ui/button'
import { Box } from '../../modules/box'
import { useBep20TokenContract, useStakingContract } from '../../web3/contract'
import { useWeb3Provider } from '../../web3/web3'
import { STAKING_CONTRACT_ADDRESS, TOKEN1_STAKE, TOKEN2_STAKE } from '../../const/const'
import useTokenBalance from '../../hooks/useTokenBalance'
import useStakeValue from '../../hooks/useStakeValue'
import useIsApproved from '../../hooks/useIsApproved'
import { getDecimalAmount } from '../../utils/formatBalance'
import useApprove from '../../hooks/useApprove'

interface StakingProps {}

const Staking: React.FC<StakingProps> = () => {
  const { active, chainId = 56, account } = useWeb3React()
  const [token1Value, setToken1value] = useState<string>('')
  const [token2Value, setToken2Value] = useState<string>('')
  const provider = useWeb3Provider()
  const stakingContract = useStakingContract(provider, STAKING_CONTRACT_ADDRESS[chainId])
  const [token1Balance] = useTokenBalance(TOKEN1_STAKE[chainId].ADDRESS, account)
  const [token2Balance] = useTokenBalance(TOKEN2_STAKE[chainId].ADDRESS, account)
  const [token1StakedBalance] = useTokenBalance(TOKEN1_STAKE[chainId].ADDRESS, TOKEN1_STAKE[chainId].ADDRESS)
  const [token2StakedBalance] = useTokenBalance(TOKEN1_STAKE[chainId].ADDRESS, TOKEN2_STAKE[chainId].ADDRESS)
  const stakeToken1Contract = useBep20TokenContract(provider, TOKEN1_STAKE[chainId].ADDRESS)
  const stakeToken2Contract = useBep20TokenContract(provider, TOKEN2_STAKE[chainId].ADDRESS)
  const [token1StakeValue] = useStakeValue(TOKEN1_STAKE[chainId].ADDRESS, STAKING_CONTRACT_ADDRESS[chainId])
  const [token2StakeValue] = useStakeValue(TOKEN2_STAKE[chainId].ADDRESS, STAKING_CONTRACT_ADDRESS[chainId])
  const [isToken1Approved, refetchStatusToken1, isLoadingToken1Approved] = useIsApproved(
    stakeToken1Contract,
    STAKING_CONTRACT_ADDRESS[chainId],
  )
  const [isToken2Approved, refetchStatusToken2, isLoadingToken2Approved] = useIsApproved(
    stakeToken2Contract,
    STAKING_CONTRACT_ADDRESS[chainId],
  )
  const { onApprove: onApproveToken1 } = useApprove(stakeToken1Contract, STAKING_CONTRACT_ADDRESS[chainId])
  const { onApprove: onApproveToken2 } = useApprove(stakeToken2Contract, STAKING_CONTRACT_ADDRESS[chainId])
  const onHandleChangeToken1Value = (e: ChangeEvent<HTMLInputElement>): void => {
    const stakeValue = e.target.value
    setToken1value(stakeValue)
  }

  const onHandleChangeToken2Value = (e: ChangeEvent<HTMLInputElement>): void => {
    const stakeValue = e.target.value
    setToken2Value(stakeValue)
  }

  const TOKEN1_SYMBOL = useMemo(() => {
    return TOKEN1_STAKE[chainId].SYMBOL
  }, [chainId])

  const TOKEN2_SYMBOL = useMemo(() => {
    return TOKEN2_STAKE[chainId].SYMBOL
  }, [chainId])

  const onHandleStake = async (): Promise<void> => {
    try {
      const stakeAmount = getDecimalAmount(Number(token1Value)).toString()
      console.log(stakeAmount, 'AMOUNT ?')
      const response = await stakingContract.methods
        .lock(TOKEN1_STAKE[chainId].ADDRESS, stakeAmount)
        .send({ from: account })
    } catch (error) {}
  }

  return (
    <>
      <section className={styles.component}>
        <GutterBox className={styles.gutter}>
          <div className={classNames(styles.wrapper, getModeClassName('light', theme))}>
            {!active ? (
              <></>
            ) : (
              <div className={styles.container}>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <div className={styles.boxWrapper}>
                    <Box
                      className={styles.miniBox}
                      style={{
                        marginRight: '30px',
                      }}
                    >
                      <p className={styles.title}>
                        Your stake:
                        <br />
                        <span>
                          {token1StakeValue} {TOKEN1_SYMBOL}
                        </span>
                      </p>
                      <p className={styles.text}>Total: {token1StakedBalance} {TOKEN1_SYMBOL}</p>
                      <div className={styles.inputContainer}>
                        <div
                          style={{
                            width: '60%',
                          }}
                        >
                          <input
                            className={classNames(styles.input, { [styles.empty]: `${token1Value}` })}
                            type="number"
                            value={token1Value}
                            onChange={onHandleChangeToken1Value}
                          />

                          <div className={styles.inputInfo}>
                            <div className={classNames({ [styles.blur]: !token1Value })}>
                              {token1Value || 0} {TOKEN1_SYMBOL}
                            </div>
                            <div>Balance: {token1Balance}</div>
                          </div>
                        </div>
                        {isToken1Approved ? (
                          <Button
                            color="pink"
                            size="large"
                            variant="contained"
                            style={{ width: '20%' }}
                            onClick={onHandleStake}
                            className={styles.button}
                          >
                            Stake
                          </Button>
                        ) : (
                          <Button
                            color="pink"
                            size="large"
                            variant="contained"
                            style={{ width: '20%' }}
                            onClick={onApproveToken1}
                            className={styles.button}
                            isLoading={isLoadingToken1Approved as boolean}
                          >
                            Approve
                          </Button>
                        )}
                      </div>
                    </Box>
                    <Box className={styles.info}></Box>
                  </div>
                  <div className={styles.boxWrapper}>
                    <Box className={styles.miniBox}>
                      <p className={styles.title}>
                        Your stake:
                        <br />
                        <span>
                          {token2StakeValue} {TOKEN2_SYMBOL}
                        </span>
                      </p>
                      <p className={styles.text}>Total: {token2StakedBalance} {TOKEN2_SYMBOL}</p>
                      <div className={styles.inputContainer}>
                        <div
                          style={{
                            width: '60%',
                          }}
                        >
                          <input
                            className={classNames(styles.input, { [styles.empty]: `${token2Value}` })}
                            type="number"
                            value={token2Value}
                            onChange={onHandleChangeToken2Value}
                          />
                          <div className={styles.inputInfo}>
                            <div className={classNames({ [styles.blur]: !token2Value })}>
                              {token2Value || 0} {TOKEN2_SYMBOL}
                            </div>
                            <div>Balance: {token2Balance}</div>
                          </div>
                        </div>
                        {isToken2Approved ? (
                          <Button
                            color="pink"
                            size="large"
                            variant="contained"
                            style={{ width: '20%' }}
                            onClick={onHandleStake}
                            className={styles.button}
                          >
                            Stake
                          </Button>
                        ) : (
                          <Button
                            color="pink"
                            size="large"
                            variant="contained"
                            style={{ width: '20%' }}
                            onClick={onApproveToken2}
                            className={styles.button}
                            isLoading={isLoadingToken2Approved as boolean}
                          >
                            Approve
                          </Button>
                        )}
                      </div>
                    </Box>
                    <Box className={styles.info}></Box>
                  </div>
                </div>
              </div>
            )}
          </div>
        </GutterBox>
      </section>
    </>
  )
}

export default Staking

import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import styles from './styles.module.scss'
import theme from '../../ui/styles/Theme.module.scss'
import { GutterBox } from '../../ui/gutter-box'
import { getModeClassName } from '../../ui/utils/get-theme-class-name'
import { useWeb3React } from '@web3-react/core'
import { Button, NavLink } from '../../ui/button'
import { Box } from '../../modules/box'

interface StakingProps {}

const Staking: React.FC<StakingProps> = () => {
  const { active, chainId = 56, account } = useWeb3React()
  const [value, setValue] = useState<string>('')

  const onHandleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const stakeValue = e.target.value
    setValue(stakeValue)
  }

  const onHandleStake = (): void => {

  }

  return (
    <>
      <section className={styles.component}>
        <GutterBox className={styles.gutter}>
          <div className={classNames(styles.wrapper, getModeClassName('light', theme))}>
            {!active ? (
              <></>
            ) : (
              <div>
                <Box className={styles.box}>
                  <p className={styles.title}>
                    Your stake:
                    <br />
                    <span>100 MOL</span>
                  </p>
                  <p className={styles.text}>Total: 100000000 MOL</p>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-around',
                      marginTop: 20,
                    }}
                  >
                    <input className={styles.input} type="number" value={value} onChange={onHandleChangeInput} />
                    <Button color="pink" size="large" variant="contained" style={{ width: '20%' }} onClick={onHandleStake} className={styles.button}>
                      Stake
                    </Button>
                  </div>
                </Box>
              </div>
            )}
          </div>
        </GutterBox>
      </section>
    </>
  )
}

export default Staking

import React, { FC, useState, ChangeEvent } from 'react'
import cx from 'classnames'
import Input from '../Input'
import styles from '../styles.module.scss'
import { useWeb3Provider } from 'web3/web3'

interface StakeBoxProps {
  tokenInfo: {
    ADDRESS: string
    SYMBOL: string
    NAME: string
  }
}

const StakeBox: FC<StakeBoxProps> = ({ tokenInfo }) => {
  const { ADDRESS, SYMBOL, NAME } = tokenInfo
  const provider = useWeb3Provider()
  const [value, setValue] = useState('')

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const stakeValue = e.target.value
    if (/^[0-9\b]+$/.test(stakeValue) || stakeValue === '') {
      setValue(stakeValue)
    }
  }

  return (
    <div className={cx(styles.container, styles.stakeBoxContainer, styles.box)}>
      <div>
        <div className={styles.headerText}>Your Stake</div>
        <div
          className={styles.headerText}
          style={{
            color: '#14b5b1',
            margin: '10px 0px',
          }}
        >
          123.1 {SYMBOL}
        </div>
        <div className={styles.amountText}>~ 15000 MOL + 500 BUSD</div>
        <Input value={value} onChange={onHandleChange} />
        <button className={styles.stakeButton}>Stake</button>
        <div className={styles.withdrawButton}>Withdraw All</div>
        <div className={styles.infoWrapper}>
          <div className={styles.infoHeader}>Info</div>
          <ul>
            <li>Min: 50 LP in 1 week</li>
            <li>Reward: 1 pack</li>
          </ul>
        </div>
      </div>
      <div className={styles.boxFooter}>
        Don't have enough MOL.{' '}
        <a href="/" rel="noopener" target="_blank">
          Buy more
        </a>
      </div>
    </div>
  )
}

export default StakeBox

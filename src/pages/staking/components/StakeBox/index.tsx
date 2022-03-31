import React, { FC, useState, ChangeEvent } from 'react'
import Input from '../Input'
import styles from '../styles.module.scss'

const StakeBox: FC = () => {
  const [value, setValue] = useState('')
  
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const stakeValue = e.target.value
    if (/^[0-9\b]+$/.test(stakeValue) || stakeValue === '') {
      setValue(stakeValue)
    }
  }

  return (
    <div className={styles.box}>
      <div className={styles.headerText}>Your Stake</div>
      <div
        className={styles.headerText}
        style={{
          color: '#14b5b1',
          margin: '10px 0px',
        }}
      >
        123.1 LP
      </div>
      <div className={styles.amountText}>~ 15000 MOL + 500 BUSD</div>
      <Input value={value} onChange={onHandleChange} />
      <button className={styles.stakeButton}>
          Stake
        </button>
    </div>
  )
}

export default StakeBox

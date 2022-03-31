import React, { ChangeEvent, FC } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

interface InputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <div
        style={{
          width: '100%',
        }}
      >
        <input className={cx(styles.input, { [styles.empty]: `${value}` })} value={value} onChange={onChange} />
        <div className={styles.inputInfo}>
          <div className={cx({ [styles.blur]: !value })}>{value || 0} LUA</div>
          <span className={styles.maxBtn}>Max</span>
        </div>
      </div>
    </div>
  )
}

export default Input

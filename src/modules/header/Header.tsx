import { FC } from 'react'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames'
import styles from './Header.module.scss'
import { MaybeWithClassName } from '../../helper/react/types'
import LogoMenu from '../../assets/img/menu.png'

type HeaderType = {
  fixed?: boolean
}

export const Header: FC<HeaderType & MaybeWithClassName> = ({ className, fixed }) => {
  const { account } = useWeb3React()

  if (account) {
    return null
  }

  return (
    <header className={classNames(styles.component, fixed && styles.fixed, className)}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={LogoMenu} alt="logo" />
        <button className={styles.connectStyle}>Connect to wallet</button>
      </div>
    </header>
  )
}

import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames'
import styles from './Header.module.scss'
import { MaybeWithClassName } from '../../helper/react/types'
import LogoMenu from '../../assets/img/menu.png'

type HeaderType = {
  fixed?: boolean
  transparent?: boolean
}

export const Header: FC<HeaderType & MaybeWithClassName> = ({ className, fixed, transparent }) => {
  const { account } = useWeb3React()

  if (account) {
    return null
  }

  return (
    <header className={classNames(styles.component, styles.fixed, className)}>
      <div className={classNames(styles.wrapper, transparent && styles.transparent)}>
        <Link to="/">
          <img className={styles.logo} src={LogoMenu} alt="logo" />
        </Link>
        <button className={styles.connectStyle}>Connect to wallet</button>
      </div>
    </header>
  )
}

import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames'
import styles from './Promo.module.scss'
import { MaybeWithClassName } from 'helper/react/types'
import { GutterBox } from 'ui/gutter-box'
import { Heading1 } from 'ui/typography'
import { TextColor } from 'ui/text-color'
import { VESTING_CONTRACT_ADDRESS } from 'const/const'
import { Header } from 'modules/header'
type PromoType = {}

export const Promo: FC<PromoType & MaybeWithClassName> = ({ className }) => {
  const { chainId, account } = useWeb3React()
  const VESTING_CONTRACT_ADDRESSES = VESTING_CONTRACT_ADDRESS[Number(chainId) || 56]

  const isLoggedIn = useMemo(() => {
    return !!account
  }, [account])

  return (
    <section className={classNames(className, styles.component)} style={{ marginTop: 50 }}>
      <GutterBox className={styles.wrapper}>
        <Heading1 className={styles.title}>
          Explore and Conquer <br />the Mollector World
        </Heading1>

        {Object.keys(VESTING_CONTRACT_ADDRESSES).map((type) => {
          return (
            <Link to={`/vesting/${VESTING_CONTRACT_ADDRESSES[type]}`}>
              <button className={styles.button}>{type} POOL | CLAIM YOUR TOKEN</button>
            </Link>
          )
        })}
        {/* <Link to={'/staking'}>
          <button className={styles.button}>STAKE YOUR TOKEN</button>
        </Link> */}
        {/* <Link to={'/vesting'}>
          <button className={styles.button}>CLAIM YOUR TOKEN (Advisor)</button>
        </Link>
        <Link to={'/vesting'}>
          <button className={styles.button}>CLAIM YOUR TOKEN (Marketing)</button>
        </Link>
        <Link to={'/vesting'}>
          <button className={styles.button}>CLAIM YOUR TOKEN (Ecosystem)</button>
        </Link>
        <Link to={'/vesting'}>
          <button className={styles.button}>CLAIM YOUR TOKEN (Advisor)</button>
        </Link>
        <Link to={'/vesting'}>
          <button className={styles.button}>CLAIM YOUR TOKEN (Private)</button>
        </Link>
        <Link to={'/staking'}>
          <button className={styles.button}>STAKE YOUR TOKEN</button>
        </Link> */}
      </GutterBox>
    </section>
  )
}

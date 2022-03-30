import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames'
import styles from './Promo.module.scss'
import { MaybeWithClassName } from '../../../../helper/react/types'
import { GutterBox } from '../../../../ui/gutter-box'
import { Heading1 } from '../../../../ui/typography'
import { TextColor } from '../../../../ui/text-color'
import { VESTING_CONTRACT_ADDRESS } from '../../../../const/const'
type PromoType = {}

export const Promo: FC<PromoType & MaybeWithClassName> = ({ className }) => {
  const { chainId } = useWeb3React()
  const VESTING_CONTRACT_ADDRESSES = VESTING_CONTRACT_ADDRESS[Number(chainId) || 56]

  return (
    <section className={classNames(className, styles.component)} style={{ marginTop: 50 }}>
      <GutterBox className={styles.wrapper}>
        <Heading1 className={styles.title}>
          The <TextColor color="pink">Decentralized Game</TextColor>
          <br />
          to Revolutionize Gamble Industry.
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

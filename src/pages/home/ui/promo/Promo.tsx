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
import { Header } from '../../../../modules/header'
type PromoType = {}

export const Promo: FC<PromoType & MaybeWithClassName> = ({ className }) => {
  const { chainId } = useWeb3React()
  const VESTING_CONTRACT_ADDRESSES = VESTING_CONTRACT_ADDRESS[Number(chainId) || 56]

  return (
    <div className={styles.component}>
      <Header transparent/>
      <section>
        <GutterBox className={styles.wrapper}>
          <Heading1 className={styles.title}>
            The <TextColor color="pink">Decentralized Game</TextColor>
            <br />
            to Revolutionize Gamble Industry.
          </Heading1>
          {Object.keys(VESTING_CONTRACT_ADDRESSES).map((type) => {
            return (
              <Link to={`/vesting/${VESTING_CONTRACT_ADDRESSES[type]}`}>
                <button className={styles.button}>CLAIM YOUR TOKEN {type}</button>
              </Link>
            )
          })}
          <Link to={'/staking'}>
            <button className={styles.button}>STAKE YOUR TOKEN</button>
          </Link>
        </GutterBox>
      </section>
    </div>
  )
}

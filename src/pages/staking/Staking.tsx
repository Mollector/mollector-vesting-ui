import React, { FC } from 'react'
import { Layout } from '../../layout'
import StakeBox from './components/StakeBox'
import InfoBox from './components/InfoBox'
import styles from './staking.module.scss'
import { ReactComponent as GiftSvg } from '../../assets/img/gift.svg'

const Staking: FC = () => {
  return (
    <Layout>
      <div className={styles.row}>
        <div className={styles.descriptionText}>
          <GiftSvg className={styles.giftIcon} />
          MOL is a multi-chain decentralized lottery and share all protocol fees with MOL holders!
        </div>
        <br />
        <br />
        <div className={styles.headerText}>Stake Mol - BUSD LP Token</div>
        <br />
        <br />
        <div className={styles.boxWrapper}>
          <StakeBox />
          <InfoBox />
        </div>
      </div>
    </Layout>
  )
}

export default Staking

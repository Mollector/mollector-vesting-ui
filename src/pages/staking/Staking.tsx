import React, { FC, useState } from 'react'
import cx from 'classnames'
import { Layout } from 'layout'
import StakeBox from './components/StakeBox'
import InfoBox from './components/InfoBox'
import styles from './staking.module.scss'
import { ReactComponent as GiftSvg } from 'assets/img/gift.svg'

const Staking: FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(1)

  const onChangeTab = (tIndex: number) => {
    setTabIndex(tIndex)
  }

  return (
    <Layout>
      <div className={styles.row}>
        <div className={styles.descriptionText}>
          <GiftSvg className={styles.giftIcon} />
          MOL is a multi-chain decentralized lottery and share all protocol fees with MOL holders!
        </div>
        <br />
        <div className={styles.tabWrapper}>
          <button
            onClick={() => onChangeTab(1)}
            className={cx(styles.sidebarOption, tabIndex === 1 && styles.active)}
            style={{
              marginRight: '20px',
            }}
          >
            LP Stake
          </button>
          <button onClick={() => onChangeTab(2)} className={cx(styles.sidebarOption, tabIndex === 2 && styles.active)}>MOL Stake</button>
        </div>
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

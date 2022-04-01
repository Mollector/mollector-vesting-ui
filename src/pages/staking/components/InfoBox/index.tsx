import React from 'react'
import cx from 'classnames'
import styles from '../styles.module.scss'
import CornerIcon from './CornerIcon'

const InfoBox = () => {
  return (
    <div className={cx(styles.box, styles.infoBoxContainer)}>
      <div className={styles.headerText}>TVL</div>
      <div className={styles.amountTextBig}>50,000,000 MOL + 500 BUSD</div>
      <div className={styles.titleGraph}>MOL</div>
      <div className={styles.wrappGraph}>
        <div className={styles.graph}>
          <div className={styles.graphCol}>
            <div className={styles.graphCell}>
              <div className={styles.textGraphRow}>2000</div>
              <CornerIcon/>
            </div>
            <div className={styles.graphCell}>
            <div className={styles.textGraphRow}>1000</div>
              <CornerIcon/>
            </div>
            <div className={styles.graphCell}>
            <div className={styles.textGraphRow}>500</div>
              <CornerIcon/>
            </div>
            <div className={cx(styles.graphCell, styles.graphCellBottom)}>
            <div className={styles.textGraphRow}>200</div>
              <CornerIcon/>
              <div className={cx(styles.textGraphRow, styles.textGraphRowEnd)}>0</div>
              <div className={cx(styles.textGraphCol, styles.textGraphColStart)}>7 days</div>
            </div>
          </div>
          <div className={cx(styles.graphCol, styles.graphColMiddle)}>
            <div className={styles.graphCell}>
              <CornerIcon/>
            </div>
            <div className={styles.graphCell}>
              <CornerIcon/>
            </div>
            <div className={styles.graphCell}>
              <CornerIcon/>
            </div>
            <div className={cx(styles.graphCell, styles.graphCellBottom)}>
              <CornerIcon/>
              <div className={styles.textGraphCol}>14 days</div>
            </div>
          </div>
          <div className={styles.graphCol}>
            <div className={styles.graphCell}>
              <CornerIcon/>
            </div>
            <div className={styles.graphCell}>
              <CornerIcon/>
            </div>
            <div className={styles.graphCell}>
              <CornerIcon/>
            </div>
            <div className={cx(styles.graphCell, styles.graphCellBottom)}>
              <CornerIcon/>
              <div className={styles.textGraphCol}>21 days</div>
              <div className={cx(styles.textGraphCol, styles.textGraphColEnd)}>28 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBox

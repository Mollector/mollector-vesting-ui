import React from 'react'
import LogoMenu from '../assets/img/menu.png'
import styles from './slider.module.scss'

const Slider = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={LogoMenu} alt="logo" />
      <button className={styles.sidebarActive}>
        LP Stake
      </button>
      <button className={styles.sidebarOption}>
        MOL Stake
      </button>
    </div>
  )
}

export default Slider

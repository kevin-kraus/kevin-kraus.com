import React from 'react'
import logo from '../../assets/logo/kkraus_logo.png'
import styles from './Logo.module.scss'

export function Logo() {
    return(
        <img src={logo}  alt={"LOGO"} className={styles.logo} />
    )
}

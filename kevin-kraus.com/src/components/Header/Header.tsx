import React from 'react'
import styles from "./Header.module.scss"
import logo from "../../assets/logo/kkraus_logo.png"
import {Language, Menu} from "@material-ui/icons";
import {Link, Tooltip} from "@material-ui/core";

export const Header = () => {

    const handleMenuClick = () => {
        console.log("Menu Clicked")
    }

    const handleLanguageClick = () => {
        console.log("Language Clicked")
    }

    const clickableStyles = [styles.gridItem, styles.clickable].join(" ")

    return (
        <div className={styles.container}>
            <div className={clickableStyles}>
                <Menu onClick={handleMenuClick}/>
            </div>
            <div className={styles.gridItem}>
                <Link href={"https://kevin-kraus.com"}>
                    <img src={logo} alt={"LOGO"} className={styles.logo}/>
                </Link>
            </div>
            <div className={clickableStyles}>
                <Tooltip title={"Switch Language"}>
                    <Language onClick={handleLanguageClick}/>
                </Tooltip>
            </div>
        </div>
    )
}
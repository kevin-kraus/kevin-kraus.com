import React from "react";
import styles from "./HeaderBar.module.scss"
import logo from "../../assets/logo/kkraus_logo.png"
import {Language, Menu} from "@material-ui/icons";

export const HeaderBar = () => {

    return (
        <header className={styles.headerBarContainer}>
            <div className={styles.headerBarBurgerMenu}>
                <Menu />
            </div>
            <div className={styles.headerBarLogo}>
                <img src={logo} />
            </div>
            <div className={styles.headerBarLanguageMenu}>
                <Language />
            </div>
        </header>
    )
}
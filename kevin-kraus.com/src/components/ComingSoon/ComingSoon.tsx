import React from 'react'
import styles from './ComingSoon.module.scss'
import {Logo} from "../Logo/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export function ComingSoon() {
    return (
        <div className={styles.wrapper}>
            <Logo />
            <div>
                <h1>This website is being rebuilt.</h1>
                <h2>Come back soon.</h2>
                <a href={"https://github.com/kevin-kraus"} className={styles.githubLink}>
                <FontAwesomeIcon icon={faGithub} className={styles.githubIcon} />
                <br/>
                kevin-kraus
                </a>

            </div>
        </div>
    )
}

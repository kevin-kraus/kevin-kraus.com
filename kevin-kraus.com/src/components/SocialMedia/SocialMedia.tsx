import React from 'react'
import {Link} from "@material-ui/core";
import styles from "./SocialMedia.module.scss"


export const SocialMedia = (props: SocialMediaProps) => {

    return(
        <div className={styles.container}>
            <Link color={"primary"} href={props.link} target="_blank" rel="noreferrer">
                <p>{props.icon}</p>
                <p>{props.text}</p>
            </Link>
        </div>
    )
}

type SocialMediaProps = {
    link: string
    text: string
    icon: any
}
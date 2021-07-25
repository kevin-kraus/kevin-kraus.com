import React from 'react'
import styles from "./PageContent.module.scss"


export const PageContent = (props: any) => {

    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
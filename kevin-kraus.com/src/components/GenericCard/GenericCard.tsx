import React from "react";
import styles from "./GenericCard.module.scss"

type GenericCardProps = {
    title: string
    text: string
    image: string
}

export const GenericCard = (props: GenericCardProps) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.textContainer}>
                <h4>{props.title}</h4>
                <div>{props.text}</div>
            </div>
            <img className={styles.image} src={props.image} alt={"Generic."}/>
        </div>
    )
}
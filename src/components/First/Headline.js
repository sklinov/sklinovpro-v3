import React from 'react'
import styles from './Headline.module.css'

export default function Headline(props) {
    return (
        <div className={styles.headline} style={{gridRowStart:1}}>
            {props.headline}
        </div>
    )
}

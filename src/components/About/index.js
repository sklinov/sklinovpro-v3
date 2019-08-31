import React from 'react'
import styles from './About.module.css'

export default function About() {
    const headline = "About me";
    const text = "Full stack software engineer with strong educational background, highly organized and self-driven, open-minded and willing to learn and progress every day, passionate about clients reaching their goals and keeping high standards of service";
    return (
        <div className={styles.container}>
            <div className={styles.headline}>{headline}</div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}

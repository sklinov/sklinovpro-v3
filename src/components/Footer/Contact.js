import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
        return (
            <div className={styles.container}>
                <h1>
                    Drop me a line
                </h1>
                <h1>
                    <a href="mailto:me@sklinov.pro?subject=Inquiry%20from%20sklinov.pro">me@sklinov.pro</a>
                </h1>
            </div>
        )
}

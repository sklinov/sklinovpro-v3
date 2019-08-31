import React from 'react'
import Contact from './Contact'
import Social from '../Navbar/Social'
import styles from './Footer.module.css' 


export default function Footer() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Contact />
                <Social />
            </div>
        </div>
    )
}

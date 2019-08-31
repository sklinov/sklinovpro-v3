import React from 'react'
import styles from './Navbar.module.css'
import Logo from './Logo';
import Menu from './Menu';
import Social from './Social';

export default function Navbar() {
    return (
        <div className={styles.row}>
            <Logo />
            <Menu />
            <Social />
        </div>
    )
}

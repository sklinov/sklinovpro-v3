import React from 'react'
import portrait from '../../img/portrait.png'
import styles from './Portrait.module.css'

export default function Portrait() {
    return (
        <div className={styles.container}>
            <img src={portrait} alt="Sergei Klinov" className={styles.portrait}/>
        </div>
    )
}

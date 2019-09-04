import React from 'react'
import linkedin from '../../img/icons/linkedin.svg'
import github from '../../img/icons/github.svg'
import behance from '../../img/icons/behance.svg'

import styles from './Social.module.css'


export default function Social() {
    
    const li = 'https://www.linkedin.com/in/sergei-klinov-1a7b4a182/';
    const gh = 'https://github.com/sklinov';
    const bh = 'https://www.behance.net/sklinov'

    return (
        <div className={styles.container}>
            <a href={li}><img src={linkedin} alt="LinkedIn" className={styles.item}/></a>
            <a href={gh}><img src={github} alt="Github" className={styles.item} /></a>
            <a href={bh}><img src={behance} alt="Behance" className={styles.item}/></a>
        </div>
    )
}

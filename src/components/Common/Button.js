import React from 'react'
import styles from './Button.module.css'

const relocate = (address) => {
    window.location = address; 
}

export default function Button(props) {
    const {label, position, href} = props;
    
    return (
        <div style={position}>
            <button className={styles.primary} onClick={() => relocate(href)}>{label}</button>
        </div> 
    )
}

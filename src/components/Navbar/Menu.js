import React from 'react'
import styles from './Menu.module.css'

export default function Menu() {
    const menuItems = [
        {
            name: 'About',
            url: '#'
        },
        {
            name: 'Tools',
            url: '#tools'
        },
        {
            name: 'Contacts',
            url: '#contacts'
        },
    ];
    return (
        <div className={styles.container}>
            {
                menuItems.map(item => {
                    return <div><a href={item.url} key={item.name} className={styles.menuitem}>{item.name}</a></div>
                })
            }
        </div>
    )
}

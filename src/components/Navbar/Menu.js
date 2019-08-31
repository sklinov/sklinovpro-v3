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
            url: '#'
        },
        {
            name: 'Contacts',
            url: '#'
        },
    ];
    return (
        <div>
            {
                menuItems.map(item => {
                    return <a href={item.url} key={item.name} className={styles.menuitem}>{item.name}</a>
                })
            }
        </div>
    )
}

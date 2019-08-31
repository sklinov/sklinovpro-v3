import React from 'react'
import classNames from 'classnames'
import styles from './Tool.module.css'

export default function Tool(props) {
    const { image, name, url } = props;
    return (
        <div>
            <a href={url} className={classNames(styles.extcont, styles.undecoratedlink)}>
                <img src={image} alt={name} className={styles.image}/>
                <span>{name}</span>
            </a>
        </div>
    )
}

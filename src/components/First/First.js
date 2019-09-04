import React from 'react'
import styles from './First.module.css'
import Headline from './Headline';
import Button from '../Common/Button';
import Portrait from './Portrait';



export default function First() {
    const headLine = "Web developer";
    const buttonLabel = "Get in touch";
    const buttonPosition = {gridRowStart:2,textAlign:'left', marginTop:'auto', marginBottom: 'auto'};
    return (
        <div className={styles.container}>
            <Headline headline={headLine}/>
            <Button label={buttonLabel} position={buttonPosition} href="mailto:me@sklinov.pro"/>
            <Portrait />
        </div>
    )
}

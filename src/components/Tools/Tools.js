import React, { Component } from 'react'
import styles from './Tools.module.css'
import posed from 'react-pose'
import { stages } from './data'
import Stage from './Stage'



export default class Tools extends Component {

    render() {
        const headline = "My tools";
        let initX = '25%';

        if(window.matchMedia("(max-width:576px)").matches) {
        initX = '0%';
        }

        const Containter = posed.div({
            draggable: 'x',
            
            init: {
                x: initX
            }

        })

        return (
            <div id="tools" className={styles.container}>
                <h1 className={styles.headline}>{headline}</h1>
                <Containter className={styles.stagecontainer}>
                {
                    stages.map(stage => {
                        return (
                            <Stage {...stage} key={stage.name}/>
                        )
                    })
                }
                </Containter>
            </div>
        )
    }
}

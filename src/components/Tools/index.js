import React, { Component } from 'react'
import styles from './Tools.module.css'
import posed from 'react-pose'
import { stages } from './data'
import Stage from './Stage'

const Containter = posed.div({
    draggable: 'x',
    init: {
        x: '25%'
    }

})

export default class Tools extends Component {

    render() {
        const headline = "My tools";

        return (
            <div id="tools">
                <h1 className={styles.headline}>{headline}</h1>
                <Containter className={styles.container}>
                {
                    stages.map(stage => {
                        return (
                            <Stage {...stage} />
                        )
                    })
                }
                </Containter>
            </div>
        )
    }
}

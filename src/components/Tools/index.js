import React, { Component } from 'react'
import styles from './Tools.module.css'
import Analysis from './Analysis';
import Prototyping from './Prototyping';
import Development from './Development';
import Deployment from './Deployment';
import posed from 'react-pose'

const Containter = posed.div({
    draggable: 'x',
    init: {
        x: '25%'
    }

})

export default class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const headline = "My tools";

        return (
            <div>
                <h1 className={styles.headline}>{headline}</h1>
                <Containter className={styles.container}>
                    <Analysis />
                    <Prototyping />
                    <Development />
                    <Deployment />
                </Containter>
            </div>
        )
    }
}

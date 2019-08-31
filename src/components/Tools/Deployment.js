import React from 'react'
import deployment from '../../img/deployment.svg'
import styles from './Deployment.module.css'
import posed from 'react-pose'

const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    }
  });

export default function Deployment() {
    const stageName = "Deployment"
    return (
        <Box className={styles.container}>
            <h1 className={styles.h1}>{stageName}</h1>
            <img src={deployment} alt={stageName} className={styles.scene}/>
        </Box>
    )
}

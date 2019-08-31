import React from 'react'
import styles from './Analysis.module.css'
import analysis from '../../img/analysis.svg'
import posed from 'react-pose'
import Tool from './Tool';

import google from '../../img/tools/googleanalytics.svg'

const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    }
  });

export default function Analysis() {
    const stageName = "Analysis"
    return (
        <div className={styles.extcont}>
            <Box className={styles.container}>
                <h1 className={styles.h1}>{stageName}</h1>
                <img src={analysis} alt={stageName} className={styles.scene}/>
            </Box>
            <div className={styles.toolcont}>
                <Tool image={google} name="Google Analytics" url=""/>
            </div>
        </div>
    )
}

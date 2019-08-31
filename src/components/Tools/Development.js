import React from 'react'
import development from '../../img/development.svg'
import styles from './Development.module.css'
import posed from 'react-pose'
import Tool from './Tool';

import react from '../../img/tools/react.svg'
import redux from '../../img/tools/redux.svg'
import php from '../../img/tools/php.svg'
import mysql from '../../img/tools/mysql.svg'
import bem from '../../img/tools/bem.svg'
import mongodb from '../../img/tools/mongodb.svg'

const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    }
  });

export default function Development() {
    const stageName = "Development"
    return (
        <div className={styles.extcont}>
            <Box className={styles.container}>
                <h1 className={styles.h1}>{stageName}</h1>
                <img src={development} alt={stageName} className={styles.scene}/>
            </Box>
            <div className={styles.toolcont}>
                    <Tool image={react} name="React.js" url=""/>
                    <Tool image={redux} name="Redux" url=""/>
                    <Tool image={php} name="PHP" url=""/>
                    <Tool image={mysql} name="MySQL" url=""/>
                    <Tool image={bem} name="BEM" url=""/>
                    <Tool image={mongodb} name="MongoDB" url=""/>
            </div>
        </div>
    )
}

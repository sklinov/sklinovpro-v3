import React from 'react'
import prototyping from '../../img/prototyping.svg'
import styles from './Prototyping.module.css'
import posed from 'react-pose'
import Tool from './Tool';

import figma from '../../img/tools/figma.svg'
import photoshop from '../../img/tools/photoshop.svg'


const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    }
  });


export default function Prototyping() {
    const stageName = "Prototyping"
    return (
        <div className={styles.extcont}>
            <Box className={styles.container}>
                <h1 className={styles.h1}>{stageName}</h1>
                <img src={prototyping} alt={stageName} className={styles.scene}/>
            </Box>
            <div className={styles.toolcont}>
                <Tool image={figma} name="Figma" url="https://figma.com"/>
                <Tool image={photoshop} name="Adobe Photoshop" url="https://adobe.com"/>
            </div>
        </div>
    )
}

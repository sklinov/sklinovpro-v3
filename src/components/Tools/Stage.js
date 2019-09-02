import React from 'react'
import styles from './Stage.module.css'
import posed from 'react-pose'
import Tool from './Tool';

const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    }
  });

export default function Stage(props) {
    const { stage, image, imageOffset, tools } = props;
    return (
        <div className={styles.extcont}>
            <Box className={styles.container}>
                <h1 className={styles.h1}>{stage}</h1>
                <img src={image} alt={stage} className={styles.scene} style={{top: imageOffset}}/>
            </Box>
            <div className={styles.toolcont}>
            {
                tools.map(tool => <Tool image={tool.image} name={tool.name} url={tool.url}/>)
            }
            </div>
        </div>
    )
}
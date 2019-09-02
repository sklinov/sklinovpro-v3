import React from 'react'
import linkedin from '../../img/icons/linkedin.svg'
import github from '../../img/icons/github.svg'
import behance from '../../img/icons/behance.svg'



export default function Social(props) {
    var size = props.size || 40;
    const styles = {
        item: {
            height: size+'px',
            width: size+'px',
            margin: (size/2)+'px '+(size/4)+'px',
            cursor: 'pointer'
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap'
        }
        
    };

    const li = 'https://www.linkedin.com/in/sergei-klinov-1a7b4a182/';
    const gh = 'https://github.com/sklinov';
    const bh = 'https://www.behance.net/sklinov'

    return (
        <div style={styles.container}>
            <a href={li}><img src={linkedin} alt="LinkedIn" style={styles.item}/></a>
            <a href={gh}><img src={github} alt="Github" style={styles.item} /></a>
            <a href={bh}><img src={behance} alt="Behance" style={styles.item}/></a>
        </div>
    )
}

import React from 'react'
import linkedin from '../../img/icons/linkedin.svg'
import github from '../../img/icons/github.svg'
import behance from '../../img/icons/behance.svg'



export default function Social(props) {
    var size = props.size || 40;
    const styles = {
        height: size+'px',
        width: size+'px',
        margin: (size/2)+'px '+(size/4)+'px',
        cursor: 'pointer'
    };

    const li = 'https://www.linkedin.com/in/sergei-klinov-1a7b4a182/';
    const gh = 'https://github.com/sklinov';
    const bh = 'https://www.behance.net/sklinov'

    return (
        <div>
            <a href={li}><img src={linkedin} alt="LinkedIn" style={styles}/></a>
            <a href={gh}><img src={github} alt="Github" style={styles} /></a>
            <a href={bh}><img src={behance} alt="Behance" style={styles}/></a>
        </div>
    )
}

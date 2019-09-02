import analysis from '../../img/analysis.svg'
import prototyping from '../../img/prototyping.svg'
import development from '../../img/development.svg'
import deployment from '../../img/deployment.svg'


import google from '../../img/tools/googleanalytics.svg'
import alexa from '../../img/tools/alexa.svg'

import figma from '../../img/tools/figma.svg'
import photoshop from '../../img/tools/photoshop.svg'

import react from '../../img/tools/react.svg'
import redux from '../../img/tools/redux.svg'
import php from '../../img/tools/php.svg'
import mysql from '../../img/tools/mysql.svg'
import bem from '../../img/tools/bem.svg'
import mongodb from '../../img/tools/mongodb.svg'


export const stages = [
    {
        name: 'Analysis',
        image: analysis,
        imageOffset: '-95px' ,
        tools: [

        ]
    },
    {
        name: 'Prototyping',
        image: prototyping,
        imageOffset: '-47px',
        tools: [
            
        ]
    },
    {
        name: 'Development',
        image: development,
        imageOffset: '47px',
        tools: [
            
        ]
    },
    {
        name: 'Deployment',
        image: deployment,
        imageOffset: '-218px',
        tools: [
            
        ]
    },
]

const tools = {
    ganalytics : {
        name: 'Google Analytics',
        image: google,
        url: 'https://analytics.google.com'
    },
    alexa : {
        name: 'Alexa',
        image: alexa,
        url: 'https://alexa.com'
    },
    figma : {
        name: 'Figma',
        image: figma,
        url: 'https://www.figma.com/file/xEl8JA62YLxKZeXjtOUiuS/Sklinov.pro?node-id=2%3A2'
    },
    photoshop : {
        name: 'Adobe Photoshop',
        image: photoshop,
        url: 'https://www.behance.net/gallery/79140771/Revo-Fit'
    },
    react : {
        name: 'React',
        image: react,
        url: 'https://alexa.com'
    },


}
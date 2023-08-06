import React from 'react' ;
import Common from './Common';
import hero from '../src/image/heros.png';

function About(){
    return(
        <>
        <Common
        name='Welcome to About page '
        imgsrc={hero}
        visit='/contact'
        btname ='Contact Now'/>
        </>
    )
}
export default About ;
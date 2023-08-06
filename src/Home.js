import React from 'react';
import './App.css';
import web from '../src/image/image1.jpg';
import Common from './Common';

function Home() {
  return (
   <>
   <Common name='Grow Your Business with '
        imgsrc={web}
        visit='/services'
        btname ='Get started'/>
   </>
  );
}

export default Home;

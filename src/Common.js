import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Common(props) {
  return (
    <div className="section-container"> 
      <section id="header" className="section-content">
        <div className='container-fluid nav-bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                  <div className='center-y-axis'>
                    <h1>
                       { props.name} <strong className="brand-name" style={{color:"#3498db"}}>Tanushree Gupta</strong>
                    </h1>
                    <h5 className='my-3'>
                      we are the team of talented developer making websites
                    </h5>
                    <div className='mt-3' id='btn1'>
                      <Link className='btn btn-primary'  to={props.visit}>{props.btname}</Link>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header img'>
                  <img src={props.imgsrc} className="img-fluid animated" alt="Website" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;

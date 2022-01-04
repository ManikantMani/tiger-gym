import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"
import aboutImg from "../images/img62.jpg";

const About = () => {
    return (
        <>
<section id="header" className="d-flex align-item-center">
                <div className="container-fluid">
                    <div className="row">
                      <div className="col-10 max-auto">
                          <div className="row">
                          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                          <div className="heading">
                          <h1 className='brand'>We are the team of <h1 className="brand-name">Tiger Zym</h1>
                                    </h1>
                                    <p className="my-3">
                                        We provide you best , for more information call on +9876543210. 
                                    </p>
                                    
                                    <div className="mt-3">
                                        <NavLink to= "/contact" className="btn-get-started " >
                                        Mail Us
                                        </NavLink>
                                    </div>
                                    </div>
                          </div>
                          <div className= "col-lg-6 order-1 order-lg-2 headre-img">
                              <img src= {aboutImg} alt="homeimage" className='img-fluid animated' />
                          </div>
                          </div>
                      </div>  
                    </div>
                    </div>
                    </section>
        </>
    );
};

export default About;

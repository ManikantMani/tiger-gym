import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";
import hom from "../images/img61.jpg";

const Home = () => {
    return (

        <>
        <section id="header" className="d-flex align-item-center">
                <div className="container-fluid">
                    <div className="row">
                      <div className="col-10 max-auto">
                          <div className="row">
                          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                          <div className="heading">
                          <h1 className='brand'>Step up your <h1 className="brand-name">fitness with us</h1>
                                    </h1>
                                    <p className="my-3">
                                        Build your body and fitness with profersonal touch
                                    </p>
                                    
                                    <div className="mt-3">
                                        <NavLink to= "/service" className="btn-get-started " >
                                        Join Us
                                        </NavLink>
                                    </div>
                                    </div>
                          </div>
                          <div className= "col-lg-6 order-1 order-lg-2 headre-img">
                              <img src= {hom} alt="homeimage" className='img-fluid animated' />
                          </div>
                          </div>
                      </div>  
                    </div>
                    </div>
                    </section>

        </>
    );
};

export default Home;

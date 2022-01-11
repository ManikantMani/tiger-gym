import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

const ServiceCard = (props) => {
    return (
        <>
            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="propsimgsrc" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.detail}</p>
                        <NavLink to ="/offers" className="btn">Join Us</NavLink>
                    </div>
                </div>
            </div>

        
        </>
    );
};

export default ServiceCard;

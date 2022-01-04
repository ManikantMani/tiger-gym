import React from 'react'
import { NavLink } from 'react-router-dom';


const OfferCard = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="propsimgsrc" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <h1 className='offer-price'>{props.offer} <span>/-only.</span></h1>
                        <NavLink to ="/offers" className="btn">Enroll Now</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferCard

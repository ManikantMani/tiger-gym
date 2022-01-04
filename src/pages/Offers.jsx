import React from 'react';
import OfferCard from './OfferCard';
import Odata from './offerData';
import "./style.css";

const Offers = () => {
    return (
        <>
            <div className="my-5">
            <h1 className="text-center">Best Offers For you</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                        
                            {
                                Odata.map((valu, index) => {
                                    return <OfferCard 
                                    key = {index} 
                                    imgsrc = {valu.imgsrc} 
                                    title = {valu.title} 
                                    offer = {valu.offer}

                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
    
        </>
    );
};

export default Offers;

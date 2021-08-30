import React from 'react';
import './HappyClientCard.css'

const HappyClientCard = ({ happyClient }) => {
    const { service, client, image } = happyClient
    return (
        <div className="col-md-4 mb-5 mb-md-0">
            <div className="happy-client-card mb-5 mb-md-0">
                <img src={image} alt={service} />
                <div className="happy-client-info text-center">
                    <h6>{service}</h6>
                    <h3>{client}K+</h3>
                </div>
            </div>
        </div>
    );
};

export default HappyClientCard;
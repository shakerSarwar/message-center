import React from 'react';
import image from '../../../Image/Vector-Smart-Object-6.webp'
import happyClient1 from '../../../Image/massage1.jpg'
import happyClient2 from '../../../Image/massage2.jpg'
import happyClient3 from '../../../Image/happyClient3.jpg'
import HappyClientCard from '../HappyClientCard/HappyClientCard'

const happayClientData = [
    { service: "SPA MASSAGE", client: 209, image: happyClient1 },
    { service: "MASSAGE THERAPY", client: 126, image: happyClient2 },
    { service: "SPORTS MASSAGE", client: 343, image: happyClient3 },
]


const HappyClient = () => {
    return (
        <section className="py-5 container">
            <img className="mx-auto d-block" src={image} alt="Vector Icon" />
            <h2 className="text-center">Happy <span className="custom-color  ">Client</span></h2>
            <div className="row py-5">
                {
                    happayClientData.map(happyClient => <HappyClientCard key={happyClient.service} happyClient={happyClient} />)
                }
            </div>

        </section>
    );
};

export default HappyClient;
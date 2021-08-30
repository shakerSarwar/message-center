import React from 'react';
import './Header.css'
import image from '../../../Image/Vector-Smart-Object-6.webp'
import NavBar from '../../ShearComponent/NavBar/NavBar';

const Banner = () => {
    return (
        <div >
            <NavBar />
            <div className="banner">
                <section className="banner-info d-flex align-items-center">
                    <div className="px-lg-5 text-center container">
                        <img src={image} alt="Vector Icon" />
                        <h2 className="mb-2">Welcome to our</h2>
                        <h1>Massage Therapy Center</h1>
                        <p>Give yourself a moment to relax. Find a minute to rejuvenate your body</p>
                        <button className="custom-button-background btn py-3 px-3 text-white mt-4">Get an Appointment</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;
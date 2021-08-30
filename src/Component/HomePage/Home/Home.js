import React from 'react';
import Footer from '../../ShearComponent/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import OurTeam from '../OurTeam/OurTeam';
import SendMessage from '../SendMessage/SendMessage';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <HappyClient />
            <Testimonials />
            <OurTeam />
            <Blogs />
            <SendMessage />
            <Footer />
        </>
    );
};

export default Home;
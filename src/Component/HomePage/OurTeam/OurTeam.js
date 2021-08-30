import React from 'react';
import OurTeamCard from '../OurTeamCard/OurTeamCard';
import jue from './../../../Image/team1.jpg'
import najma from './../../../Image/team2.jpg'
import mim from './../../../Image/team3.jpg'
import image from '../../../Image/Vector-Smart-Object-6.webp'


const teamData = [
    { name: "Jue Akrar", facebook: '//facebook.com', instagram: '//instagram.com', img: jue, catagory: "Massage therapy expert" },
    { name: "Najma Sajrin", facebook: '//facebook.com', instagram: '//instagram.com', img: najma, catagory: "Spa massage expert" },
    { name: "Mim Moni", facebook: '//facebook.com', instagram: '//instagram.com', img: mim, catagory: "Sports massage expert" },
]

const OurTeam = () => {
    return (
        <section className="py-5 container">
            <img className="mx-auto d-block" src={image} alt="Vector Icon" />
            <h2 className="text-center">Our <span className="custom-color  ">Team</span></h2>
            <p className='text-center font-size-18'>Get to know our team who are at your service</p>
            <div className="row py-5">
                {
                    teamData.map(teamMembar => <OurTeamCard key={teamMembar.name} teamMembar={teamMembar} />)
                }
            </div>
        </section>
    );
};

export default OurTeam;
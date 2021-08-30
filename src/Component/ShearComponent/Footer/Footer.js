import React from 'react';
import FooterColumn from '../FooterColumn/FooterColumn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const noNamed = [
    { name: "Emergency Dental Care", link: "/emergency" },

];
const company = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "Our Team", link: "//ourTeam" },
    { name: "Tarms Conditions", link: "/tarmsCondition" }
];
const QuickLinks = [
    { name: "Quick Links", link: "/quickLinks" },
    { name: "Rentals", link: "/rentals" },
    { name: "Sales", link: "/sales" },
    { name: "Contact", link: "/contact" },
    { name: "Our blog", link: "/ourBlog" },
]

const Footer = () => {
    return (
        <footer className="bg-danger text-white pt-5 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p><FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt}
                        /> #000(0th Floor), Road #00, New Dohs Mohakhali, Dhaka, Bangladesh</p>
                    </div>
                    <FooterColumn menuTitle={'Company'} menuItems={company} />
                    <FooterColumn menuTitle={"QuickLinks"} menuItems={QuickLinks} />

                    <div className="col-md-3">
                        <h5>About Us</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum ratione doloribus totam quam vitae?</p>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a target="_blanck" href="//facebook.com">
                                    <FontAwesomeIcon
                                        className="icon active-icon"
                                        icon={faFacebookF}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blanck" href="//google.com">
                                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blanck" href="//instagram.com">
                                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blanck" href="//instagram.com">
                                    <FontAwesomeIcon className="icon" icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyRight text-center mt-4">
                    <p>Copyright &#169; {new Date().getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
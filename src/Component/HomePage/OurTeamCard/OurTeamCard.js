import React from 'react';
import './OurTeamCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const OurTeamCard = ({ teamMembar }) => {
    const { name, facebook, instagram, img, catagory } = teamMembar
    return (
        <div className="col-md-4 text-center d-md-flex flex-column mb-5 mb-md-0">
            <div className="card">
                <img src={img} alt={name} className="card-img-top team-member-image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>{catagory}</h6>
                    <div className="team-member-social text-center">
                        <a target="_blanck" href={facebook}>
                            <FontAwesomeIcon className="icon" icon={faFacebookF}
                            />
                        </a>
                        <a target="_blanck" href={instagram}>
                            <FontAwesomeIcon className="icon" icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeamCard;
import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css'


const ServiceCard = ({ service }) => {

    const { _id, serviceName, serviceDescription, serviceCharge, image } = service
    const history = useHistory();

    return (
        <div className="col-md-4 mt-5 mt-md-0 d-flex ">
            <div className="card text-center py-4 border-0 shadow service-card">
                <img src={`data:image/png;base64,${service.image.img}`} alt={serviceName} className="card-img service-image" />
                <div className="card-body">
                    <h3 className="card-title">{serviceName}</h3>
                    <h4 className="custom-color">${serviceCharge}</h4>
                    <p className="mb-0 mt-2">{serviceDescription}</p>
                    <button className="btn btn-primary mt-4" onClick={() => history.push(`/admin/booking/${_id}`)}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
import React from 'react';
import './CustomarBookingCard.css'


const CustomarBookingCard = ({ booking }) => {
    const { service, serviceDescription, bookingStatus } = booking
    return (
        <div className="col-md-6 px-5 mb-4">
            <div className="card px-3 pt-2 pb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="customar-order-image-container" >
                        <img src={`data:image/png;base64,${booking.serviceImg.img}`} alt="this is image" />
                    </div>
                    <p className="painding-status mb-0">{bookingStatus}</p>
                </div>
                <div className="card-body p-0 pt-3">
                    <h5 className="mt-2 mb-3">{service}</h5>
                    <p>{serviceDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomarBookingCard;
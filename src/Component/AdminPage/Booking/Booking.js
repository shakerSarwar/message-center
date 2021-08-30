import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';
import BookingDetails from '../BookingDetails/BookingDetails';


const Booking = () => {
    const { id } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch("https://fathomless-retreat-05696.herokuapp.com/service/" + id || '')
            .then((res) => res.json())
            .then((data) => {
                setService(data);
            });
    }, [id]);


    return (
        <section className="book-page">
            <AdminPageTitle title={"Book"} />

            {
                id ? <div className="add-service-form-container pl-5">
                    <BookingDetails service={service} />
                </div> : <div className="pl-5">
                    <h4>You have no any selected service.</h4>
                    <h5 className="mt-3">Pleaser go home page and select a service.</h5>
                    <Link className="btn btn-primary mt-3" as={Link} to="/">Back To Home</Link>
                </div>
            }
        </section>
    );
};

export default Booking;
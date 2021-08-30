import React, { useEffect, useState } from 'react';
import Spinner from '../../ShearComponent/Spinner/Spinner';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';
import CustomarBookingCard from '../CustomarBookingCard/CustomarBookingCard';

const CustomarBookingList = () => {

    const logInUser = JSON.parse(localStorage.getItem('user'))
    const [bookingList, setBookingList] = useState([])

    const [spinner, setSpinner] = useState(false);


    useEffect(() => {
        setSpinner(true);
        fetch('https://fathomless-retreat-05696.herokuapp.com/customarBookingsList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logInUser.email })

        })
            .then(res => res.json())
            .then(data => {
                setBookingList(data)
                setSpinner(false);
            })

    }, [])


    if (spinner) {
        return <Spinner />;
    }
    return (
        <section className="booking-list">
            <AdminPageTitle title={"Booking List"} />
            {
                bookingList.length > 0 ? <div className="row pl-3 pr-5">
                    {
                        bookingList.map(booking => <CustomarBookingCard key={booking._id} booking={booking} />)
                    }
                </div> : <h3 className="pl-5">No Order Found ! ! !</h3>
            }
        </section>
    );
};

export default CustomarBookingList;
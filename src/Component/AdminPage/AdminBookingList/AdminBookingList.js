import React, { useEffect, useState } from 'react';
import Spinner from '../../ShearComponent/Spinner/Spinner';
import AdminOrderListTable from '../AdminOrderListTable/AdminOrderListTable';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';


const AdminBookingList = () => {

    const [bookings, setBookings] = useState([])
    const [spinner, setSpinner] = useState(false);

    const fetchAdminBookingList = () => {
        setSpinner(true);
        fetch('https://fathomless-retreat-05696.herokuapp.com/adminBookingsList')
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setSpinner(false)
            })
    }

    useEffect(() => {
        fetchAdminBookingList()
    }, [])

    if (spinner) {
        return <Spinner />;
    }

    return (
        <section className="admin-order-list">
            <AdminPageTitle title={"Booking List"} />
            <AdminOrderListTable bookings={bookings} fetchAdminBookingList={fetchAdminBookingList} />
        </section>
    );
};

export default AdminBookingList;
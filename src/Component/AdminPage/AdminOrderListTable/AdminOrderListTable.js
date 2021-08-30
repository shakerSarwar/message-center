import React from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import './AdminBookingTable.css'

const AdminOrderListTable = ({ bookings, fetchAdminBookingList }) => {

    const handelStatusUpdate = (e, booking) => {

        const updateStatus = {
            id: booking._id,
            updateStatus: e.target.innerText
        }
        fetch("https://fathomless-retreat-05696.herokuapp.com/updateBookingStatus", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateStatus),
        })
            .then(res => res.json())
            .then(data => {
                alert("Status Updated Successfully")
                fetchAdminBookingList()
            })
    }


    return (
        <>
            {
                bookings.length > 0 ? <Table bordered hover className="maneg-product-table mb-4">
                    <thead className="border-bottom">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>PayWith</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.service}</td>
                                <td>Creaddit Card</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            {booking.bookingStatus}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={(e) => handelStatusUpdate(e, booking)}>Painding</Dropdown.Item>
                                            <Dropdown.Item onClick={(e) => handelStatusUpdate(e, booking)}>On going</Dropdown.Item>
                                            <Dropdown.Item onClick={(e) => handelStatusUpdate(e, booking)}>Done</Dropdown.Item>
                                        </Dropdown.Menu>

                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table> : <h3 className="pl-5">No Order Found ! ! !</h3>
            }
        </>
    );
};

export default AdminOrderListTable;
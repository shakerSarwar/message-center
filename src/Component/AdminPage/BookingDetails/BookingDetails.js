import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const BookingDetails = ({ service }) => {
    const history = useHistory();
    const logedInUser = JSON.parse(localStorage.getItem('user'))


    const handelPayment = (paymentId) => {
        const bookingDetails = {
            name: logedInUser.displayName,
            email: logedInUser.email,
            service: service.serviceName,
            serviceDescription: service.serviceDescription,
            serviceImg: service.image,
            bookingStatus: "painding",
            paymentId,
            placeTime: new Date(),
        };

        fetch("https://fathomless-retreat-05696.herokuapp.com/bookingAservice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert("Your order place successfully");
                    history.replace('/admin/customarBookingList');
                }
            });
    };


    return (
        <div className="pb-5">
            <Form className="col-md-8">
                <Form.Group controlId="nameFild">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={logedInUser.displayName}
                        type="text"
                        placeholder="Name"
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="emailFild">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                value={logedInUser.email}
                            />
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group controlId="serviceChargelFild">
                            <Form.Label>Service Charge</Form.Label>
                            <Form.Control
                                type="text"
                                readOnly
                                placeholder="ServiceCharge"
                                value={"$" + service.serviceCharge}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="serviceNameFild">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control
                        readOnly
                        value={service.serviceName}
                    />
                </Form.Group>
            </Form>
            <ProcessPayment handelPayment={handelPayment} />
        </div>
    );
};

export default BookingDetails;
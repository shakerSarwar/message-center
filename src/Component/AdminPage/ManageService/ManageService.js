import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './ManageService.css'
import Spinner from '../../ShearComponent/Spinner/Spinner';

const ManageService = () => {

    const [spinner, setSpinner] = useState(false);

    const [services, setServices] = useState([])

    const fetchServices = () => {
        setSpinner(true);
        fetch('https://fathomless-retreat-05696.herokuapp.com/services')
            .then(res => res.json())
            .then(data =>{ 
                setServices(data)
                setSpinner(false)
            })
    }

    useEffect(() => {        
        fetchServices()
    }, [])


    const handelDeletProduct = (productId) => {
        fetch(
            `https://fathomless-retreat-05696.herokuapp.com/deletService/${productId}`,
            {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(res => res.json())
            .then(data => fetchServices())
    };

    if (spinner) {
        return <Spinner />;
    }

    return (
        <section className="container maneg-product-container">
            <AdminPageTitle title={"Manage Service"} />

            {services.length > 0 ? (
                <Table bordered hover className="maneg-product-table mb-4">
                    <thead className="border-bottom">
                        <tr>
                            <th>Product Name</th>
                            <th>Service Charge</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service._id}>
                                <td>{service.serviceName}</td>
                                <td>${service.serviceCharge}</td>
                                <td>
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        onClick={() => handelDeletProduct(service._id)}
                                        className="delet-icon"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <article className="mt-4">
                    <h3>No Service Found </h3>
                    <Button
                        as={Link}
                        to="/"
                        variant="primary"
                        className="mt-3"
                        type="button"
                    > Go To Home</Button>
                </article>
            )}

        </section>
    );
};

export default ManageService;
import React from 'react';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';
import './AddService.css'
import { useForm } from "react-hook-form";
import { Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";


const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const formData = new FormData()
        formData.append('file', data.serviceImage[0])
        formData.append('serviceName', data.serviceName)
        formData.append('serviceDescription', data.serviceDescription)
        formData.append('serviceCharge', data.serviceCharge)

        fetch('https://fathomless-retreat-05696.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert("Service Added Successfully")
            })
    };


    return (
        <main className="add-service ">
            <AdminPageTitle title={"Add Service"} />
            <div className="px-5 add-service-form-container">
                <Form onSubmit={handleSubmit(onSubmit)} className="p-5">
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Service Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Service Title"
                                {...register("serviceName", { required: true })}
                            />
                            {errors?.serviceName?.type === "required" && (
                                <p className="text-danger">This field is required</p>
                            )}
                        </Form.Group>

                        <Form.Group as={Col}>
                            <label htmlFor="file">Add Photo</label>
                            <div className="upload-image-area">
                                <input
                                    type="file"
                                    id="file"
                                    className="inputfile"
                                    {...register("serviceImage", { required: true })}

                                />
                                <label htmlFor="file" className="text-success">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} /> Choose a file
                                 </label>
                                {errors?.serviceImage?.type === "required" && (
                                    <p className="text-danger">This field is required</p>
                                )}
                            </div>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control {...register("serviceCharge", { required: true })} placeholder="Service Charge" type="number" />

                            {errors?.serviceCharge?.type === "required" && (
                                <p className="text-danger">This field is required</p>
                            )}
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={4} {...register("serviceDescription", { required: true })} placeholder="Service Description" />

                            {errors?.serviceDescription?.type === "required" && (
                                <p className="text-danger">This field is required</p>
                            )}
                        </Form.Group>
                    </Form.Row>

                    <input
                        type="submit"
                        className="btn btn-success ml-auto d-block mt-3"
                        value="Submit"
                    />
                </Form>
            </div>
        </main>
    );
};

export default AddService;
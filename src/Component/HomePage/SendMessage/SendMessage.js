import React from 'react';
import { useForm } from "react-hook-form";
import image from '../../../Image/Vector-Smart-Object-6.webp'

const SendMessage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        alert(JSON.stringify(data));
    };
    return (
        <section className="conaict-section py-5">
            <div className="container">
                <img className="mx-auto d-block" src={image} alt="Vector Icon" />
                <article className="col-7 mx-auto text-center">
                    <h6 className="custom-color">CONTACT US</h6>
                    <h1>Always Connect with us</h1>
                </article>
                <article className="col-md-8 mx-auto mt-5">
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 form-group">

                            <input type="text" placeholder="Frist Name Here" className="form-control" {...register("fristName", { required: true })} />

                            {errors?.fristName?.type === "required" && (
                                <p className="text-danger">This field is required</p>
                            )}

                        </div>
                        <div className="col-md-6 form-group">
                            <input type="text" placeholder="Last Name Here" className="form-control" {...register("lastName", { required: true })} />

                            {errors?.lastName?.type === "required" && (
                                <p className="text-danger">This field is required</p>
                            )}

                        </div>
                        <div className="col-6 form-group">
                            <input placeholder="Email Address" className="form-control" {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+\.\S+$/
                            })} />
                            {errors?.email?.type === "required" && (
                                <p className="text-danger">This field is required</p>
                            )}
                            {errors?.email?.type === "pattern" && (
                                <p className="text-danger">Write a valid e-mail</p>
                            )}
                        </div>
                        <div className="col-6 form-group">
                            <input type="number" placeholder="Mobile Number" className="form-control" {...register("number", { required: true })} />

                            {errors?.number?.type === "required" && (
                                <p className="text-danger">This field is required</p>
                            )}
                        </div>
                        <div className="form-group col-12">
                            <textarea className="form-control" placeholder="Your Message" rows="8" {...register("massage", { required: true })}></textarea>
                            {errors?.massage?.type === "required" && (
                                <p className="text-danger">This field is required</p>
                            )}
                        </div>
                        <input type="submit" className="btn custom-button-background mx-auto" value="Send Message" />
                    </form>
                </article>
            </div>
        </section>
    );
};

export default SendMessage;
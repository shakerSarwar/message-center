import React from 'react';
import { useForm } from "react-hook-form";
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';
import './AddAdmin.css'

const AddAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://fathomless-retreat-05696.herokuapp.com/addAdmin', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Admin Added Successfully !!!")
            })
    };

    return (
        <section className="addAdmin">
            <AdminPageTitle title={"Add Admin"} />
            <div className="add-admin-form-container w-75">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-6 form-group">
                        <input id="addAdmin" placeholder="Email Address" className="form-control" {...register("email", {
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
                    <input type="submit" className="btn btn-danger custom-height-100 " value="Add Admin" />
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;
import React from 'react';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddReview = () => {
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const logInUser = JSON.parse(localStorage.getItem('user'))

    const onSubmit = (data) => {
        const reviewData = {
            name: data.name,
            address: data.address,
            massage: data.massage,
            imgUrl: logInUser.photoURL
        }

        fetch('https://fathomless-retreat-05696.herokuapp.com/addReview', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                alert("Review Added SuccessFully !!")
            })
    }

    
    return (
        <section className="review">
            <AdminPageTitle title={"Review"} />
            <article className="col-md-8 ml-3 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" placeholder="Frist Name Here" className="form-control" {...register("name", { required: true })} />
                        {errors?.name?.type === "required" && (
                            <p className="text-danger">This field is required</p>
                        )}
                    </div>
                    <div className=" form-group">
                        <input type="text" placeholder="Address" className="form-control" {...register("address", { required: true })} />

                        {errors?.address?.type === "required" && (
                            <p className="text-danger">This field is required</p>
                        )}

                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Your Message" rows="8" {...register("massage", { required: true })}></textarea>
                        {errors?.massage?.type === "required" && (
                            <p className="text-danger">This field is required</p>
                        )}
                    </div>
                    <input type="submit" className="btn custom-button-background mx-auto" value="Send Message" />
                </form>
            </article>
        </section>
    );
};

export default AddReview;
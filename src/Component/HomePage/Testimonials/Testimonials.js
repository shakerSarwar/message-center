import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import image from '../../../Image/Vector-Smart-Object-6.webp'

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://fathomless-retreat-05696.herokuapp.com/reviews')
            .then(res => res.json())
            .then(reviews => setTestimonials(reviews))
    }, [])



    return (
        <div className="container py-5">
            <img className="mx-auto d-block" src={image} alt="Vector Icon" />
            <h2 className="text-center mb-5">Testimonials</h2>
            <div className="row">
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial} />)
                }
            </div>

        </div>
    );
};

export default Testimonials;
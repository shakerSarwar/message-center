import React from 'react';
import './Blog.css'

const Blog = ({ blog }) => {
    const { catagory, title, date, postBy, image } = blog
    return (
        <div className="col-md-4 mb-5 mb-md-0">
            <div className="card blog-card">
                <img src={image} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h6 className="custom-color">{catagory}</h6>
                    <h4 className="card-title">{title}</h4>
                    <p className="mb-0">{date}</p>
                    <p>{postBy}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
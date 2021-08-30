import React from 'react';
import Blog from '../Blog/Blog'
import massage1 from '../../../Image/massage1.jpg'
import massage2 from '../../../Image/massage2.jpg'
import massage3 from '../../../Image/massage3.jpg'
import image from '../../../Image/Vector-Smart-Object-6.webp'

const blogData = [
    { catagory: "News", title: "HOW OFTEN SHOULD I GET A MASSAGE?", date: new Date().toDateString(), postBy: "Admin", image: massage1 },
    { catagory: "News", title: "HOW MASSAGE LOSES ITS VALUE", date: new Date().toDateString(), postBy: "Admin", image: massage2 },
    { catagory: "News", title: "WHAT IS MASSAGE THERAPY?", date: new Date().toDateString(), postBy: "Admin", image: massage3 }
]


const Blogs = () => {
    return (
        <section className="container py-5">
            <img className="mx-auto d-block" src={image} alt="Vector Icon" />
            <h2 className="text-center mb-5">Blogs</h2>
            <div className="row">
                {
                    blogData.map(blog => <Blog key={blog.title} blog={blog} />)
                }
            </div>
        </section>
    );
};

export default Blogs;
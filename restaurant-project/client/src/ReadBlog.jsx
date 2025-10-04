import React, { useState, useEffect } from "react";
import axios from "axios";

function ReadBlog(){
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:5001/blogs")
            .then((res) => {
                setBlogs(res.data.blogs);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching blogs:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div id="blog">
                <div className="head">
                    <h1>Read Blogs</h1>
                </div>
                <div className="loading">Loading blogs...</div>
            </div>
        );
    }

    return(
        <div>
             <div id="blog">
            <div className="head">
                <h1>Read Blogs</h1>
            </div>
            <div className="blogs">
                {blogs.map((blog) => (
                    <div className="blogCard" key={blog.id}>
                        <img src={blog.image} alt={blog.title}/>
                        <h3>{blog.title}</h3>
                        <p>{blog.excerpt}</p>
                        <a href={blog.link} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}
export default ReadBlog;

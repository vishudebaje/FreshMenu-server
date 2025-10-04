import React, { useState, useEffect } from "react";
import axios from "axios";

function CustomerReview(){
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:5001/reviews")
            .then((res) => {
                setReviews(res.data.reviews);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching reviews:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div id="review">
                <div className="head">
                    <h1>Customer Reviews</h1>
                </div>
                <div className="loading">Loading reviews...</div>
            </div>
        );
    }

    return(
        <div>
            <div id="review">
            <div className="head">
                <h1>Customer Reviews</h1>
            </div>
            <div className="reviews">
                {reviews.map((review) => (
                    <div className="reviewCard" key={review.id}>
                        <img src={review.image} alt={review.customerName}/>
                        <p>{review.review}</p>
                        <div className="review-meta">
                            <strong>{review.customerName}</strong>
                            <div className="rating">
                                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}
export default CustomerReview;

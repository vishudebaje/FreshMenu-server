import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FoodList from "./View/FoodList";

function Description({ filters, selectedFood, onOpenFood, onCloseModal }){
    const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5001/home")
            .then((res) => {
                setHomeData(res.data.home || {});
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching home data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="main">
                <div className="loading">Loading home content...</div>
            </div>
        );
    }

    return(
        <div>
             <div className="main">
            <div className="mainText">
                <h1>{homeData.title}</h1>
                <p>{homeData.description}</p>
                <button onClick={() => navigate('/food')}>Explore Foods</button>
            </div>
            <img src={homeData.heroImage} alt="Restaurant Hero"/>
          </div>
          <div id="food">
            <div className="head">
                <h1>Search Results</h1>
            </div>
            <FoodList
              filters={filters}
              onOpenFood={onOpenFood}
              selectedFood={selectedFood}
              onCloseModal={onCloseModal}
            />
          </div>
        </div>
    )
}
export default Description;

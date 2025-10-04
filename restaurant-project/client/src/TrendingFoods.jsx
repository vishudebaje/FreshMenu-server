import React, { useState, useEffect } from "react";

function TrendingFoods({ selectedFood, onOpenFood, onCloseModal }){
    const [trendingFoods, setTrendingFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5001/Menu")
            .then((res) => res.json())
            .then((data) => {
                // Get first 9 items as trending foods
                const trending = data.slice(0, 9);
                setTrendingFoods(trending);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching trending foods:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div id="trend">
                <div className="head">
                    <h1>Trending Foods</h1>
                </div>
                <div className="loading">Loading trending foods...</div>
            </div>
        );
    }

    // Group foods into rows of 3
    const foodRows = [];
    for (let i = 0; i < trendingFoods.length; i += 3) {
        foodRows.push(trendingFoods.slice(i, i + 3));
    }

    return(
        <div>
             <div id="trend">
            <div className="head">
                <h1>Trending Foods</h1>
            </div>
            <div className="trends">
                {foodRows.map((row, rowIndex) => (
                    <div className="trendFood" key={rowIndex}>
                        {row.map((food) => (
                            <div key={food.id} className="trendItem" onClick={() => onOpenFood(food)}>
                                <img src={food.img} alt={food.name}/>
                                <div className="trendInfo">
                                    <h4>{food.name}</h4>
                                    <p>{food.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {selectedFood && (
                <div className="cardDetail">
                    <i
                        className="fa-solid fa-xmark"
                        onClick={onCloseModal}
                    ></i>
                    <img src={selectedFood.img} alt={selectedFood.name} />
                    <h2>{selectedFood.name}</h2>
                    <p>₹{selectedFood.price}</p>
                    <p>{selectedFood.description}</p>
                </div>
            )}
        </div>
</div>
    )
}
export default TrendingFoods;

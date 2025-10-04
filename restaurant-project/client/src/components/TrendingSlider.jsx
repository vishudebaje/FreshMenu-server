// src/components/TrendingSlider.jsx
import React, { useState, useEffect } from "react";

const TrendingSlider = ({ foods }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (foods.length) setCount((prev) => (prev + 1) % foods.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [foods]);

  return (
    <div className="trending-slider">
      {foods.map((food, index) => (
        <img
          key={food.id}
          src={food.img}
          alt={food.name}
          style={{
            transform: `translateX(-${count * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
          className="trendFood"
        />
      ))}
    </div>
  );
};

export default TrendingSlider;

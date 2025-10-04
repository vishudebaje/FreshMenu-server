// import React, { useEffect, useState } from 'react';

// const FoodList = () => {
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     fetch('/data.json') // Fetching from the public folder
//       .then(response => response.json())
//       .then(data => setFoods(data.students))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Food Items</h1>
//       <ul>
//         {foods.map(food => (
//           <li key={food.id}>
//             <h2>{food.name}</h2>
//             <p>{food.price}</p>
//             <p>{food.description}</p>
//             <img src={food.img} alt={food.name} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FoodList;


// 


// import React, { useState, useEffect } from "react";
// import "../OurFood.css";

// const FoodList = () => {
//   const [foods, setFoods] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/Menu")
//       .then((res) => res.json())
//       .then((data) => setFoods(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1 className="title">Our Foods</h1>

//       <div className="foods">
//         {foods.map((food) => (
//           <div
//             key={food.id}
//             className="foodCard"
//             onClick={() => setSelectedFood(food)}
//           >
//             <img src={food.img} alt={food.name} />
//             <h3>{food.name}</h3>
//             <p>₹{food.price}</p>
//           </div>
//         ))}
//       </div>

//       {selectedFood && (
//         <div className="cardDetail">
//           <i
//             className="fa-solid fa-xmark"
//             onClick={() => setSelectedFood(null)}
//           ></i>
//           <img src={selectedFood.img} alt={selectedFood.name} />
//           <h2>{selectedFood.name}</h2>
//           <p>₹{selectedFood.price}</p>
//           <p>{selectedFood.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FoodList;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "../OurFood.css";

const FoodList = ({ filters, onOpenFood, selectedFood, onCloseModal }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/Menu")
      .then((res) => setFoods(res.data))
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  // Filter foods based on filters
  const filteredFoods = Array.isArray(foods) ? foods.filter((food) => {
    const matchesId = !filters.id || food.id.toString().includes(filters.id);
    const matchesName = !filters.name || food.name.toLowerCase().includes(filters.name.toLowerCase());
    const matchesPrice = !filters.price || food.price.toString().includes(filters.price);
    return matchesId && matchesName && matchesPrice;
  }) : [];

  return (
    <div>
      <div className="foods">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="foodCard"
            onClick={() => onOpenFood(food)}
          >
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>
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
  );
};

export default FoodList;

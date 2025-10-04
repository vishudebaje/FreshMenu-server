// // import react from "react";
//  import { Link } from "react-router-dom";

// function OurFood(){
//     return(
//         <div>
//             <div id="food">
//             <div className="head">
//                 <h1>Our Foods</h1>
//             </div>
//             <div className="foods">
//                 <div className="foodCard">
//                     <img src="https://tse4.mm.bing.net/th/id/OIP.AgKKL7KO8-y5kuGqZKEfwwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
//                     <p>Rosted chicken Bowl</p>
//                     <h3>₹199</h3>
//                     <Link to="/foods"> 
//                     <button>Add To Cart</button>
//                     </Link>
//                 </div>
//                 <div className="foodCard">
//                     <img src="https://tse3.mm.bing.net/th/id/OIP.Jie_l9LCKUn8kPtxU-V2GQHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
//                     <p>Rosted chicken Bowl</p>
//                      <h3> ₹259 </h3>
//                     <button>Add To Cart</button>
//                 </div>
//                 <div className="foodCard">
//                     <img src="https://www.foodiecrush.com/wp-content/uploads/2018/02/Mediterranean-Chicken-Broccoli-and-Tomato-Quinoa-Bowls-foodiecrush.com-003.jpg" alt=""/>
//                     <p>Rosted chicken Bowl</p>
//                      <h3> ₹150 </h3>
//                     <button>Add To Cart</button>
//                 </div>
//                 <div className="foodCard">
//                     <img src="https://tse2.mm.bing.net/th/id/OIP.5iCPrvdCTTvuJhUYDZ-P1QHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
//                     <p>Rosted chicken Bowl</p>
//                       <h3> ₹280 </h3>
//                     <button>Add To Cart</button>
//                 </div>
//                 <div className="foodCard">
//                     <img src="https://tse2.mm.bing.net/th/id/OIP.79ZPhWIXCyg-IC_oPus46gAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
//                     <p>Rosted chicken Bowl</p>
//                      <h3> ₹299 </h3>
//                     <button>Add To Cart</button>
//                 </div>
//                 <div className="foodCard">
//                     <img src="https://www.blondelish.com/wp-content/uploads/2019/06/Chipotle-Chicken-Bowl-With-Cauliflower-Rice-PaleoWhole30-Recipe-19.jpg" alt=""/>
//                     <p>Rosted chicken Bowl</p>
//                     <h3> ₹ 350 </h3>
//                     <button>Add To Cart</button>
//                 </div>
//             </div>
//         </div>
//   </div>
//     )
// }
// export default OurFood;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import TrendingSlider from "./components/TrendingSlider";
// import "../src/OurFood.css";  


// const OurFood = () => {
//   const [foods, setFoods] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);

//   useEffect(() => {
    fetch("http://localhost:5001/Menu")
//       .then((res) => res.json())
//       .then((data) => setFoods(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1 className="title">Our Foods</h1>

//       {/* Trending Slider */}
//       <TrendingSlider foods={foods} />

//       {/* Food Cards */}
//       <div className="foods">
//         {foods.map((food) => (
//           <div
//             className="foodCard"
//             key={food.id}
//             onClick={() => setSelectedFood(food)}
//           >
//             <img src={food.img} alt={food.name} />
//             <p>{food.name}</p>
//             <h3>₹{food.price}</h3>
//             <Link to="/foods">
//               <button>Add To Cart</button>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
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

// export default OurFood;

import React from "react";
import FoodList from "./View/FoodList";
import "./OurFood.css";

const OurFood = ({ filters, selectedFood, onOpenFood, onCloseModal }) => {
  return (
    <div>
      <h1 className="title">Our Food</h1>
      <FoodList
        filters={filters}
        onOpenFood={onOpenFood}
        selectedFood={selectedFood}
        onCloseModal={onCloseModal}
      />
    </div>
  );
};

export default OurFood;

// let trendFood = document.querySelectorAll(".trendFood");
// let foodCard = document.querySelectorAll(".foodCard");

//  let arrow = document.getElementById("arrow");
//  arrow.addEventListener("click", function(){
//     window.scrollTo({top:0, behavior:"smooth"})
//  })



// let count = 0;
// console.log(trendFood);

// trendFood.forEach((imgs, index)=>{
//     imgs.style.left=`${index*100}%`;
// })


// const myFun  = ( ) =>{
//     trendFood.forEach((curImg)=>{
//         curImg.style.transform=`translateX(-${count * 100}%)`
//     })
     
// }

// setInterval(()=>{
//     count++;
//     if(count == trendFood.length){
//         count=0
//     }
//     myFun()
// },4000)


// // food Detail 

// foodCard.forEach((curCard)=>{
//     curCard.addEventListener("click", function(){
//         console.log(curCard);

//         let div = document.createElement("div");
//         div.classList.add("cardDetail");
//         div.innerHTML=`
//         <i id="icon"  class="fa-solid fa-xmark"></i>
//         <img src=${curCard.firstElementChild.src} alt="">
//        <h2>Food Details</h2>
//        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias, est excepturi inventore id minus! Aliquid at facilis quam a hic debitis?</p>

//         `
//         document.querySelector("body").appendChild(div)
//         document.querySelector("#icon").addEventListener("click", function(){
//             div.remove();
//         })
//     })
// })


// import React, { useState, useEffect } from "react";

// const Main = ({ foods }) => {
//   const [count, setCount] = useState(0);
//   const [selectedFood, setSelectedFood] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prev) => (prev + 1) % foods.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [foods.length]);

//   return (
//     <div>
//       {/* Trending Slider */}
//       <div className="trending-slider">
//         {foods.map((food, index) => (
//           <img
//             key={food.id}
//             src={food.img}
//             alt={food.name}
//             style={{ transform: `translateX(-${count * 100}%)` }}
//           />
//         ))}
//       </div>

//       {/* Food Cards */}
//       <div className="food-cards">
//         {foods.map((food) => (
//           <div
//             key={food.id}
//             className="foodCard"
//             onClick={() => setSelectedFood(food)}
//           >
//             <img src={food.img} alt={food.name} />
//             <h3>{food.name}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedFood && (
//         <div className="cardDetail">
//           <i
//             id="icon"
//             className="fa-solid fa-xmark"
//             onClick={() => setSelectedFood(null)}
//           ></i>
//           <img src={selectedFood.img} alt={selectedFood.name} />
//           <h2>{selectedFood.name}</h2>
//           <p>{selectedFood.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;


import React, { useState, useEffect } from "react";
import "./Main.css"; // CSS file for styling

const Main = () => {
  const [foods, setFoods] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedFood, setSelectedFood] = useState(null);

  // Fetch backend data
  useEffect(() => {
    fetch("http://localhost:5000/Menu")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  // Trending slider auto move
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (foods.length ? (prev + 1) % foods.length : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [foods]);

  return (
    <div>
      {/* Trending Slider */}
      <div className="trending-slider">
        {foods.map((food, index) => (
          <img
            key={food.id}
            src={food.img}
            alt={food.name}
            style={{ transform: `translateX(-${count * 100}%)` }}
            className="trendFood"
          />
        ))}
      </div>

      {/* Food Cards */}
      <div className="food-cards">
        {foods.map((food) => (
          <div
            key={food.id}
            className="foodCard"
            onClick={() => setSelectedFood(food)}
          >
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFood && (
        <div className="cardDetail">
          <i
            className="fa-solid fa-xmark"
            onClick={() => setSelectedFood(null)}
          ></i>
          <img src={selectedFood.img} alt={selectedFood.name} />
          <h2>{selectedFood.name}</h2>
          <p>{selectedFood.description}</p>
        </div>
      )}
    </div>
  );
};

export default Main;

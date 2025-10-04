// import './App.css';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import OurFood1 from './View/OurFood1';
// import Navbar from './Navbar';
// import Description from './Description';
// import OurFood from './OurFood';
// import TrendingFoods from './TrendingFoods';
// import CustomerReview from './CustomerReview';
// import ReadBlog from './ReadBlog';
// import Footer from './Footer';
// import FoodList from './View/FoodList';




// function App() {
//   return (
//     <div className="App">

      
      
       
//        <FoodList/>
//       <Router>
//      <Navbar/>
//       <Routes>
//         <Route path='/' element={<Description/>}/>
//        <Route path='/food' element={<OurFood/>}/>
//         <Route path='/trend' element={<TrendingFoods/>}/>
//         <Route path='/review' element={<CustomerReview/>}/>
//         <Route path='/blog' element={<ReadBlog/>}/>
//         <Route path='/foods' element={<OurFood1/>}/>
//       </Routes>
//      <Footer/>
//     </Router> 
  

//     </div>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import OurFood from "./OurFood";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<OurFood />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import OurFood1 from './View/OurFood1';
// import Navbar from './Navbar';
// import Description from './Description';
// import OurFood from './OurFood';
// import TrendingFoods from './TrendingFoods';
// import CustomerReview from './CustomerReview';
// import ReadBlog from './ReadBlog';
// import Footer from './Footer';
// import FoodList from './View/FoodList';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />

//         {/* FoodList section */}
//         <FoodList />

//         {/* Routes for other components */}
//         <Routes>
//           <Route path='/' element={<Description />} />
//           <Route path='/food' element={<OurFood />} />
//           <Route path='/trend' element={<TrendingFoods />} />
//           <Route path='/review' element={<CustomerReview />} />
//           <Route path='/blog' element={<ReadBlog />} />
//           <Route path='/foods' element={<OurFood1 />} />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './Navbar';
import Footer from './Footer';
import Description from './Description';
import OurFood from './OurFood';
import TrendingFoods from './TrendingFoods';
import CustomerReview from './CustomerReview';
import ReadBlog from './ReadBlog';
import OurFood1 from './View/OurFood1';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [filters, setFilters] = useState({ id: "", name: "", price: "" });
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleOpenFood = (food) => {
    setSelectedFood(food);
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          filters={filters}
          onFilterChange={handleFilterChange}
          onOpenFood={handleOpenFood}
        />

        <Routes>
          <Route path='/login' element={<Login isRegister={false} />} />
          <Route path='/register' element={<Login isRegister={true} />} />
          <Route path='/' element={
            <ProtectedRoute>
              <Description
                filters={filters}
                selectedFood={selectedFood}
                onOpenFood={handleOpenFood}
                onCloseModal={handleCloseModal}
              />
            </ProtectedRoute>
          } />
          <Route path='/food' element={
            <ProtectedRoute>
              <OurFood
                filters={filters}
                selectedFood={selectedFood}
                onOpenFood={handleOpenFood}
                onCloseModal={handleCloseModal}
              />
            </ProtectedRoute>
          } /> {/* OurFood + FoodList */}
          <Route path='/trend' element={
            <ProtectedRoute>
              <TrendingFoods
                selectedFood={selectedFood}
                onOpenFood={handleOpenFood}
                onCloseModal={handleCloseModal}
              />
            </ProtectedRoute>
          } />
          <Route path='/review' element={
            <ProtectedRoute>
              <CustomerReview />
            </ProtectedRoute>
          } />
          <Route path='/blog' element={
            <ProtectedRoute>
              <ReadBlog />
            </ProtectedRoute>
          } />
          <Route path='/foods' element={
            <ProtectedRoute>
              <OurFood1 />
            </ProtectedRoute>
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

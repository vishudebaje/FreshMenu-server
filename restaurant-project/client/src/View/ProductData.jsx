// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// function ProductData() {
//   const [products, setProducts] = useState([]);
//   const [filtered, setFiltered] = useState([]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterType, setFilterType] = useState('All');
//   const [sortOrder, setSortOrder] = useState('default');

//   useEffect(() => {
//     axios.get('http://localhost:5000/menu')
//       .then(res => {
//         setProducts(res.data);
//         setFiltered(res.data);
//       })
//       .catch(err => console.error('Error fetching products:', err));
//   }, []);

//   // Apply all 3 filters on change
//   useEffect(() => {
//     let updated = [...products];

//     // Search
//     if (searchTerm) {
//       updated = updated.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Filter
//     if (filterType !== 'All') {
//       updated = updated.filter(product => product.type.toLowerCase() === filterType.toLowerCase());
//     }

//     // Sort
//     if (sortOrder === 'asc') {
//       updated.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'desc') {
//       updated.sort((a, b) => b.price - a.price);
//     }

//     setFiltered(updated);
//   }, [searchTerm, filterType, sortOrder, products]);

//   return (
//     <div className="container">
//       <h2> Menu List</h2>

//       {/* Search, Filter & Sort Controls */}
//       <div className="controls" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />

//         <select value={filterType} onChange={e => setFilterType(e.target.value)}>
//           <option value="All">All Types</option>
//           <option value="Veg">Veg</option>
//           <option value="Non-veg">Non-veg</option>
//           <option value="Panjabi">Panjabi</option>
//         </select>

//         <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
//           <option value="default">Sort by Price</option>
//           <option value="asc">Low → High</option>
//           <option value="desc">High → Low</option>
//         </select>
//       </div>

//       {/* Product Grid */}
//       <div className="row">
//         {filtered.length > 0 ? (
//           filtered.map(product => (
//             <div key={product.id} className="card col-md-3" style={{ marginBottom: '1rem' }}>
//               <div className="row">
//                 <div className="card-img">
//                   <img className="card-img-top" src={product.img} alt={product.name} />
//                 </div>
//                 <hr />
//                 <span className="topTemp">{product.name}</span>
//               </div>
//               <div className="card-body">
//                 <span className="max">Rs. {product.price}</span>
//                 <h4 className="card-title">{product.type}</h4>
//                 <div className="card-text">
//                   <p className="day">{product.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductData;

import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductData() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Fetch data from JSON Server
  useEffect(() => {
    axios
      .get("http://localhost:5001/Menu")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Apply search, filter, and sort
  useEffect(() => {
    let updated = [...products];

    // Search by name
    if (searchTerm) {
      updated = updated.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type
    if (filterType !== "All") {
      updated = updated.filter(
        (product) => product.type.toLowerCase() === filterType.toLowerCase()
      );
    }

    // Sort by price (convert ₹ string to number)
    if (sortOrder === "asc") {
      updated.sort(
        (a, b) =>
          parseInt(a.price.replace(/[^\d]/g, "")) -
          parseInt(b.price.replace(/[^\d]/g, ""))
      );
    } else if (sortOrder === "desc") {
      updated.sort(
        (a, b) =>
          parseInt(b.price.replace(/[^\d]/g, "")) -
          parseInt(a.price.replace(/[^\d]/g, ""))
      );
    }

    setFiltered(updated);
  }, [searchTerm, filterType, sortOrder, products]);

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>🍴 Product List</h2>

      {/* Search, Filter & Sort */}
      <div
        className="controls"
        style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
      >
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Panjabi">Panjabi</option>
        </select>

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="default">Sort by Price</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div
        className="row"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product.id}
              className="card"
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{ width: "100%", height: "120px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>
                {product.price} | {product.type}
              </p>
              <small>{product.description}</small>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductData;


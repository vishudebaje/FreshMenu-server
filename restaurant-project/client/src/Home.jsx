import React, { useState, useEffect } from "react";

function Home(){
    const [homeData, setHomeData] = useState({});
    const [reviewsData, setReviewsData] = useState([]);
    const [blogsData, setBlogsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/home')
            .then(response => response.json())
            .then(data => setHomeData(data.home || {}))
            .catch(error => console.error('Error fetching home data:', error));

        fetch('http://localhost:5001/reviews')
            .then(response => response.json())
            .then(data => setReviewsData(data.reviews || []))
            .catch(error => console.error('Error fetching reviews data:', error));

        fetch('http://localhost:5001/blogs')
            .then(response => response.json())
            .then(data => setBlogsData(data.blogs || []))
            .catch(error => console.error('Error fetching blogs data:', error));
    }, []);

    return(

        // Navbar
        <div>
            <div className="container">
        <nav>
            <div className="logo">
                <h1>FreshMenu</h1>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#food">Foods</a></li>
                <li><a href="#trend">Trends</a></li>
                <li><a href="#review">Review</a></li>
                <li><a id="blogItem" href="#blog">Blog's</a></li>
                <i id="bar" className="fa-solid fa-bars"></i>

            </ul>
        </nav>

           {/* Description */}
        <div className="main">
            <div className="mainText">
                <h1>{homeData.title || 'Discover the Best Food & Drinks in FreshMenu'}</h1>
                <p>{homeData.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt officiis, vitae corporis ipsum optio architecto maxime doloremque facere dicta!'}</p>
                <button>Explore Foods</button>
            </div>
            <img src={homeData.heroImage || "https://tse1.mm.bing.net/th/id/OIP.hHmUSLYyCA6fsCeybGXSWQHaE5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"} alt=""/>
          </div>
 
            {/* Head */}
            {/* Our Food */}
        <div id="food">
            <div className="head">
                <h1>Our Foods</h1>
            </div>
            <div className="foods">
                <div className="foodCard">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.AgKKL7KO8-y5kuGqZKEfwwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
                    <p>Rosted chicken Bowl</p>
                    <h3>₹199</h3>
                    <button>Add To Cart</button>
                </div>
                <div className="foodCard">
                    <img src="https://tse3.mm.bing.net/th/id/OIP.Jie_l9LCKUn8kPtxU-V2GQHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
                    <p> chicken Bowl</p>
                    <h3> ₹259 </h3>
                    <button>Add To Cart</button>
                </div>
                <div className="foodCard">
                    <img src="https://www.foodiecrush.com/wp-content/uploads/2018/02/Mediterranean-Chicken-Broccoli-and-Tomato-Quinoa-Bowls-foodiecrush.com-003.jpg" alt=""/>
                    <p>Chicken Main Dishes</p>
                    <h3> ₹150 </h3>
                    <button>Add To Cart</button>
                </div>
                <div className="foodCard">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.5iCPrvdCTTvuJhUYDZ-P1QHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
                    <p>Chicken Marsala</p>
                    <h3> ₹280 </h3>
                    <button>Add To Cart</button>
                </div>
                <div className="foodCard">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.79ZPhWIXCyg-IC_oPus46gAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
                    <p>Fajita Chicken burrito bowl</p>
                    <h3> ₹299 </h3>
                    <button>Add To Cart</button>
                </div>
                <div className="foodCard">
                    <img src="https://www.blondelish.com/wp-content/uploads/2019/06/Chipotle-Chicken-Bowl-With-Cauliflower-Rice-PaleoWhole30-Recipe-19.jpg" alt=""/>
                    <p>Sesame Chicken bowl</p>
                    <h3> ₹ 350 </h3>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>

            {/* Head2 */}
            {/* Customer Review  */}
        <div id="review">
            <div className="head">
                <h1>Customer Review's</h1>
            </div>
            <div className="reviews">
                {reviewsData.map(review => (
                    <div key={review.id} className="reviewCard">
                        <img src={review.image} alt={review.customerName}/>
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>
        </div>

            {/* Head3 */}
            {/* Trending Foods */}
        <div id="trend">
            <div className="head">
                <h1>Trending Foods</h1>
            </div>
            <div className="trends">
                <div className="trendFood">
                    <img src="https://www.twopeasandtheirpod.com/wp-content/uploads/2020/09/Savory-Breakfast-Bowls-4-650x950.jpg" alt=""/>
                    <img src="https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Breakfast-Bowls-with-Bananas-Berries-and-Seed-Toppings-750x1125.png" alt=""/>
                    <img src="https://assets.epicurious.com/photos/5d6553694a334900095c0ff7/1:1/w_2560%2Cc_limit/sweet-potato-breakfast-bowls-recipe-HC-082719.jpg" alt=""/>

                </div>
                <div className="trendFood">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.90W2EjL3FnxNh7qvp60FYwDMEy?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
                    <img src="https://tse2.mm.bing.net/th/id/OIP.bLkAfoxmlCdfxS_tgVKE3AHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
                    <img src="https://i.pinimg.com/originals/f5/bf/63/f5bf63a4b5a1804714b060962d70448f.jpg" alt=""/>

                </div>
                <div className="trendFood">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.Vm15IaPcZxVdhUhG6QnHrQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
                    <img src="https://img.freepik.com/premium-photo/bowl-food-with-picture-bowl-food_875337-778.jpg" alt=""/>
                    <img src="https://tse1.mm.bing.net/th/id/OIP.6TkMIBhLK05SAGxcoXnAvwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>

                </div>
            </div>
        </div>


             {/* Head4 */}
             {/* Read Blog */}
        <div id="blog">
            <div className="head">
                <h1>Read Blog's</h1>
            </div>
            <div className="blogs">
                {blogsData.map(blog => (
                    <div key={blog.id} className="blogCard">
                        <img src={blog.image} alt={blog.title}/>
                        <p>{blog.excerpt}</p>
                        <h3>{blog.title}</h3>
                        <a href={blog.link}>Read More</a>
                    </div>
                ))}
            </div>
        </div>

            {/* Footer */}
        <div className="footer">
            <div className="text">
                <h3>About US</h3>
                <p/> Lorem ipsum dolor sit amet consectetur <br/>
                    adipisicing elit. Odit consequuntur par <br/>
                    velit accusamus, animi ullam harum dolores <br/>
                    libero cum suscipit. Molestiae, commodi.<p/>
            </div>
            <div className="text">
                <h3>Our Food</h3>
                <p>Quality</p>
                <p>Affordable</p>
                <p>Best Price</p>
                <p>Low Cost</p>

            </div>
            <div className="text">
                <h3>Offers</h3>
                <p>20% OFF</p>
                <p>Free 1st meal</p>
                <p>quality</p>
                <p>Affordable</p>

            </div>
            <div className="text">
                <h3>Connect Us</h3>
                <p>LinkedIn</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <i id="arrow" className="fa-solid fa-arrow-up-from-bracket"></i>
               </div>
               <script href='main.js'></script>
           </div>
         </div>
       </div>
    )
 }

export default Home;
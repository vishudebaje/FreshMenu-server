import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="main">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              consequuntur pariatur velit accusamus, animi ullam harum dolores
              libero cum suscipit. Molestiae, commodi.
            </p>
          </div>

          <div className="footer-section">
            <h3>Our Food</h3>
            <ul>
              <li><a href="#">Quality</a></li>
              <li><a href="#">Affordable</a></li>
              <li><a href="#">Best Price</a></li>
              <li><a href="#">Low Price</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Offers</h3>
            <ul>
              <li><a href="#">20% off</a></li>
              <li><a href="#">Free 1st meal</a></li>
              <li><a href="#">Quality</a></li>
              <li><a href="#">Affordable</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Restaurant Project. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

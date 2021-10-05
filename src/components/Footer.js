import React from 'react'
import {Link} from "react-router-dom";
import images from "../img/images.jpg"


const Footer = () => {
    return (
        <div>
            <footer className="main-footer">
                <div className="footer">
                    <div className="footer1">
                        <h1>Logo.</h1>
                        <p>Address: 101/A Maxblis Bulding, Opposite Pari Chowk, Greater Noida</p>
                        <div className="images4">
                            <img src={images} alt="images"></img>
                            <img src={images} alt="images"></img>
                            <img src={images} alt="images"></img>
                            <img src={images} alt="images"></img>
                        </div>
                    </div>
                    <div className="footer2">
                        <h3>Our Services</h3>
                        <div>
                            <Link to="#">Buy</Link>
                            <Link to="#">Rent/Lease</Link>
                            <Link to="#">Sell</Link>
                        </div>
                    </div>
                    <div className="footer3">
                        <h3>Quick Links</h3>
                        <div>
                            <Link to="#">Blogs</Link>
                            <Link to="#">Feedback</Link>
                            <Link to="#">About Us</Link>
                            <Link to="#">Contact Us</Link>
                        </div>
                    </div>
                    <div className="footer4">
                        <h3>Subscribe Us</h3>
                        <input type="email" name="emailaddress" placeholder="Enter your email address"></input>
                        <button>Subscribe</button>

                    </div>

                </div>

            </footer>
            <div className="footer-text">
                <p>&copy; 2021 India Property. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer

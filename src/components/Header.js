import React from 'react'
import images from "../img/images.jpg";
import Hamburger from "./Hamburger";

const Header = () => {
    return (
        <div>
            <header className="header">
                <nav>
                  
                    <div className="navbar">
                  
                        <div className="nav-item">
                        <Hamburger className="d-none"/>
                            <div className="logo">
                                Logo.
                            </div>
                            <div className="align-right">
                                <ul className="nav-item">
                                    <li>Buy</li>
                                    <li>Rent</li>
                                    <li>Sell</li>
                                    <li>Saved</li>
                                    <button className="btn">Post a property</button>
                                    <div className="rightCircle">
                                        <img src={images} alt="images"></img>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header

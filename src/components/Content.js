import React from 'react'
import images2 from "../img/images2.jpg";
import { FaBed, FaLocationArrow, FaHeart, FaBath, FaBalanceScale } from "react-icons/fa";



const Content = () => {
    return (
        <>
            <section>
                <div className="sContainer">
                    <div className="content-box">
                        <div className="save">
                            <h2>Saved Properties</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="sContainer">
                    <div className="content-box">
                        <div className="properties">
                            <div className="buttons">
                                <button type="button" className="btn btn-dark">Buy</button>
                                <button type="button" className="btn btn-light">Rent/Lease</button>
                            </div>
                            <div className="props">
                                <span>3 Properties</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="sContainer">
                    <div className="content-box">
                        <div className="details">
                            <div className="details2">
                                <div className="details3">
                                    <div className="image">
                                        <img src={images2} alt=""></img>
                                    </div>
                                    <div className="head">
                                        <h1>&#8377; 1.98 Cr</h1>
                                        <div className="icons">
                                            <h4> <FaBed />Bed</h4>
                                            <h4> <FaBath />Bath</h4>
                                            <h4> <FaBalanceScale />2900sqft.</h4>

                                        </div>
                                        <div className="icons2">

                                            <h2>2 BHK Multistory Villa</h2>
                                            <p> <FaLocationArrow /> Devanahailii, Bangalore... | Ready to Move</p>
                                            <p>East Facing Property | Listed on 12 Sept 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="details4">
                                    <h1><FaHeart /></h1>
                                    <h4>Listed On:<span>21 June 2021</span></h4>
                                    <h4>Owner: <span>Shyam Raj</span></h4>
                                    <button className="btn">Contact Owner</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="sContainer lightBox">
                    <div className="content-box">
                        <div className="details">
                            <div className="details2">
                                <div className="details3">
                                    <div className="image">
                                        <img src={images2} alt=""></img>
                                    </div>
                                    <div className="head">
                                        <h1>&#8377; 1.98 Cr</h1>
                                        <div className="icons">
                                            <h4> <FaBed />Bed</h4>
                                            <h4> <FaBath />Bath</h4>
                                            <h4> <FaBalanceScale />2900sqft.</h4>

                                        </div>
                                        <div className="icons2">

                                            <h2>2 BHK Multistory Villa</h2>
                                            <p> <FaLocationArrow /> Devanahailii, Bangalore... | Ready to Move</p>
                                            <p>East Facing Property | Listed on 12 Sept 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="details4">
                                    <h1><FaHeart /></h1>
                                    <h4>Listed On:<span>21 June 2021</span></h4>
                                    <h4>Owner: <span>Shyam Raj</span></h4>
                                    <button className="btn">Contact Owner</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content

import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";

import Service1 from '../images/img1.png';
import Service2 from '../images/img2.jpeg';

function Home(){
    return(
        <div>
            <Slider/>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            Quam ob rem ut ii qui superiores sunt submittere se debent in amicitia, sic quodam modo inferiores extollere. Sunt enim quidam qui molestas amicitias faciunt, cum ipsi se contemni putant; quod non fere contingit nisi iis qui etiam contemnendos se arbitrantur; qui hac opinione non modo verbis sed etiam opere levandi sunt.
                            
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read more</Link>
                        </div>  
                    </div>
                </div>
            </section>

            {/* Our Vision, mission and values */}
            <VMC/>

            {/* Our Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p>Post haec Gallus Hierapolim profecturus ut expeditioni Hac ita persuasione</p>
                                    <Link to="/services" className="btn btn-outline-info">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service2} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p>Post haec Gallus Hierapolim profecturus ut expeditioni Hac ita persuasione</p>
                                    <Link to="/services" className="btn btn-outline-info">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p>Post haec Gallus Hierapolim profecturus ut expeditioni Hac ita persuasione</p>
                                    <Link to="/services" className="btn btn-outline-info">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}
export default Home;
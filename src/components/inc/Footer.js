import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p className="text-white">
                        Quam ob rem ut ii qui superiores sunt submittere se debent in amicitia, sic quodam modo inferiores extollere. Sunt enim quidam qui molestas amicitias faciunt, cum ipsi se contemni putant; quod non fere contingit nisi iis qui etiam contemnendos se arbitrantur; qui hac opinione non modo verbis sed etiam opere levandi
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">#64, Bangalore Karnataka India. Byrathi</p></div>
                        <div><p className="text-white mb-1">#+91 8888XXXX8</p></div>
                        <div><p className="text-white mb-1">#+91 8888XXXX8</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Footer;
import React, { Fragment } from "react";

import { Link }  from 'react-router-dom';

function Navbar(){
    return(
        <Fragment>
        <div className="navbar-dark bg-dark">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">Funda of web IT</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link active">About us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link active">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </Fragment>
    );
}
export default Navbar;
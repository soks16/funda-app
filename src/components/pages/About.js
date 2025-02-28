import React from "react";
import VMC from "./inc/Vmc";

function Aboutus(){
    return(
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">Home / About us</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue, nec exsertare lacertos nec crispare permissi tela, quae vehunt bina vel terna, pecudum ritu inertium trucidantur.
                    </p>
                </div>
            </section>
            <VMC/>
        </div>
    );
}
export default Aboutus;
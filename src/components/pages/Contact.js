import React, { useState } from "react";
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';

function Contactus(){
    const [capVal, setCapVal] = useState(null);
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4fc6ac59-90fe-4ed4-b0e5-8555f6aeb0eb");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success !",
                text: "Message send successfully!",
                icon: "success"
            });
            event.target.reset();
        }
    };

    return(
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">Home / About us</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <form onSubmit={onSubmit}>
                                    <h6>Contact Form</h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Full name</label>
                                        <input type="text" className="form-control" name="name" placeholder="Enter full name" required/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" name="phone" placeholder="Enter Phone Number" required/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Adress</label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter Email Adress" required/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="5" className="form-control" name="message" placeholder="Type your message" required>
                                        </textarea>
                                    </div>
                                    <ReCAPTCHA sitekey="6LfgeecqAAAAANXFDA-0zIhKPrx0czrOYSZo1l5J" onChange={(val) => setCapVal(val)}/>
                                    <div className="form-group py-3">
                                        <button type="submit" disabled={!capVal} className="btn btn-primary shadow w-100">Send Message</button>
                                    </div>
                                    </form>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5>Address Information</h5>
                                    <div className="underline"></div>
                                    <p>
                                        #XXX, Byrathi, Bangalore Karnataka - 56XXX, INDIA
                                    </p>
                                    <p>
                                        Phone: +212 88XXXXXX
                                    </p>
                                    <p>
                                        Email: email@domain.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contactus;
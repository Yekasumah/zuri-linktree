 import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import { Link } from "react-router-dom";

 const name = 'Yeka Asumah'
const Contact = () => {
      
    return (
                    <div className="contact_">
                        <div className="contact__section">
                            <div className="contact__section__header">
                                <h2 className="contact__section__header__h2">Contact Me</h2>
                                <p className="contact__section__header__p"
                                >Hi there, contact me to ask me about anything you have in mind.</p>
                            </div>
                            <div className="contact__section__form">
                                <form action="">
                                    <div className="contact_names">
                                    <div className="contact__section__form__input">
                                        <h5>First Name</h5>
                                        <input id="first_name" type="text" placeholder="First Name" />
                                    </div>
                                    
                                    <div className="contact__section__form__input">
                                    <h5>Last Name</h5>
                                        <input id="last_name" type="text" placeholder="Last Name" />
                                    </div>
                                    </div>
                                    <div className="contact__section__form__input">
                                    <h5>Email</h5>
                                        <input id="email" type="email" placeholder="Email" />
                                    </div>
                                    <div className="contact__section__form__input">
                                        <textarea name="" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <div className="contact__section__form__input5">
                                        <input id="checkbox" type="checkbox" placeholder="Name" />
                                        <p>You agree to providing your data to {name} who may contact you.</p>
                                    </div>
                                    <div className="contact__section__form__input">
                                        <button id="btn_submit" className="contact__section__form__input__btn">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            
    );
};

export default Contact;
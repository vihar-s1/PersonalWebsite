import React, { useContext, useEffect } from 'react';
import { SocialIcon } from "react-social-icons";
import { themeContext } from '../context/ThemeContext';

import SocialDetails from "../json/SocialDetails.json";

const ICON_DIM="30px";
const TEXT_THEME = "text-dark";
const INPUT_CLASS = "bg-light bg-opacity-50 shadow-lg";


const ContactMe = () => {

    useEffect(() => {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
    
                form.classList.add('was-validated')
            }, false)
        })
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Message Sent !");
    }

    return (    
        <div 
            className={`d-flex justify-content-center flex-wrap ${TEXT_THEME}`} 
            style={{background: "url(contactme.webp) no-repeat center center/cover", fontFamily: "kalam"}}
        >
            
            <div className="col-md-5 p-4 m-3 bg-light bg-opacity-10 shadow-lg">
                <h1>My Contact Details</h1>
                <ul className="list-group m-3" > 
                    {
                        SocialDetails.map((socialLink, index) => {
                            return (
                                <div key={index} 
                                    className={`list-group-item d-flex  shadow-lg flex-wrap align-items-center bg-light bg-opacity-25 ${TEXT_THEME}`}
                                >
                                    <SocialIcon 
                                        className='m-2 rounded-circle shadow-lg bg-light' 
                                        style={{width: ICON_DIM, height: ICON_DIM}} 
                                        url={socialLink.url} 
                                        network={socialLink.network}
                                    />
                                    <div>
                                        <div className="h4">{socialLink.field}:</div>
                                        <div className='h5'>{socialLink.value}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>

            <div className='col-md-6 p-4 m-3 bg-light bg-opacity-10 shadow-lg' >
                <h1>Send Me a Message !</h1>
                <form className={`row g-3 needs-validation ${TEXT_THEME}`} noValidate onSubmit={handleSubmit}>
                    <div className="col-md-7 pb-3">
                        <label htmlFor="firstName" className="form-label h5">Your Name</label>
                        <input type="text" className={`form-control ${INPUT_CLASS} ${TEXT_THEME}`} id="firstName" required/>
                        <div className="invalid-feedback" style={{width: "fit-content"}}>
                            Please enter your Name!
                        </div>
                    </div>
                    <div className="col-md-5 pb-3">
                        <label htmlFor="email" className="form-label h5">Email</label>
                        <input type="email" className={`form-control ${INPUT_CLASS} ${TEXT_THEME}`} id="email" autoComplete='yes' required/>
                        <div className="invalid-feedback"  style={{width: "fit-content"}}>
                            Please enter valid Email!
                        </div>
                    </div>
                    <div className="col-md-4 pb-3">
                        <label htmlFor="groupType" className="form-label h5">Are You A/An:</label>
                        <div>
                            <select id="groupType" className={`form-select ${INPUT_CLASS} ${TEXT_THEME}`}>
                                <option value="Individual">Individual</option>
                                <option value="Group">Group</option>
                                <option value="Company">Company</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-8 pb-3">
                        <label htmlFor="subject" className="form-label h5">Subject</label>
                        <input type="text" className={`form-control ${INPUT_CLASS} ${TEXT_THEME}`} id="subject" required/>
                        <div className="invalid-feedback" style={{width: "fit-content"}}>
                            Enter the Reason to Contact Here.
                        </div>
                    </div>
                    <div className="col-md-12 pb-3">
                        <label htmlFor="message" className="form-label h5">Message</label>
                        <textarea id="message" className={`form-control ${INPUT_CLASS} ${TEXT_THEME}`} rows="5" required/>
                        <div className="invalid-feedback" style={{width: "fit-content"}}>
                            Describe the Reason to Contact Here.
                        </div>
                    </div>
                    <div className="col-12 pb-3 text-center">
                        <button className="btn btn-light bg-light bg-opacity-75 shadow-lg" type="submit"><h5>Send the Message</h5></button>
                    </div>
                </form>
            </div>
            
        </div>
    )
};

export default ContactMe;

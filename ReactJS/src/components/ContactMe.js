import React, { useEffect, useState } from 'react';
import { SocialIcon } from "react-social-icons";

import SocialDetails from "../json/SocialDetails.json";

const ICON_DIM="30px";
const TEXT_THEME = "text-dark";
const INPUT_CLASS = "bg-dark bg-opacity-25 shadow-lg";


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

    const [mailData, setMailData] = useState({ name:"", email:"", groupType: "Individual", subject:"", message:"" })

    const onChangeHandler = (event) => {
        setMailData({...mailData, [event.target.id]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Message Sent !");
        setMailData({ name:"", email:"", groupType: "Individual", subject:"", message:"" })
    }

    return (    
        <div 
            className={`d-flex justify-content-center flex-wrap ${TEXT_THEME}`} 
            style={{background: "url(contactme.jpg) no-repeat center center/cover", fontFamily: "kalam"}}
        >
            
            <div className="col-md-5 p-4 m-3 bg-light bg-opacity-10 shadow-lg">
                <h1>My Contact Details</h1>
                <ul className="list-group m-3" > 
                    {
                        SocialDetails.map((socialLink, index) => {
                            return (
                                <div key={index} 
                                    className="list-group-item d-flex shadow-lg flex-wrap align-items-center bg-light bg-opacity-25"
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
                <form id="contactMeForm" className={`row g-3 needs-validation ${TEXT_THEME}`} noValidate onSubmit={handleSubmit}>
                    <div className="col-md-7 pb-3">
                        <label htmlFor="name" className="form-label h5">Your Name</label>
                        <input 
                            type="text" 
                            className={`form-control ${INPUT_CLASS} ${TEXT_THEME}`}
                            id="name"
                            value={mailData.name}
                            onChange={onChangeHandler}
                            required 
                            minLength={3}
                        />
                        <div className="invalid-feedback" style={{width: "100%"}}>
                            Please enter your Name of minimum length 3!
                        </div>
                    </div>

                    <div className="col-md-5 pb-3">
                        <label htmlFor="email" className="form-label h5">Email</label>
                        <input 
                            type="email" 
                            className={`form-control ${INPUT_CLASS} ${TEXT_THEME}`} 
                            id="email" 
                            value={mailData.email}
                            onChange={onChangeHandler}
                            autoComplete='yes'
                            required minLength={5}
                        />
                        <div className="invalid-feedback"  style={{width: "100%"}}>
                            Please enter valid Email of minimum length 5!
                        </div>
                    </div>

                    <div className="col-md-4 pb-3">
                        <label htmlFor="groupType" className="form-label h5">Are You A/An:</label>
                        <div>
                            <select className={`form-select ${INPUT_CLASS} ${TEXT_THEME}`} 
                                id="groupType"
                                value={mailData.groupType}
                                onChange={onChangeHandler}
                            >
                                <option value="Individual" defaultChecked>Individual</option>
                                <option value="Group">Group</option>
                                <option value="Company">Company</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-8 pb-3">
                        <label htmlFor="subject" className="form-label h5">Subject</label>
                        <input 
                            type="text"
                            className={`form-control ${INPUT_CLASS} ${TEXT_THEME}`}
                            id="subject"
                            value={mailData.subject}
                            onChange={onChangeHandler}
                            required
                            minLength={5}
                            maxLength={50}
                        />
                        <div className="invalid-feedback" style={{width: "100%"}}>
                            Enter the Reason to Contact in 5 to 50 characters.
                        </div>
                    </div>

                    <div className="col-md-12 pb-3">
                        <label htmlFor="message" className="form-label h5">Message</label>
                        <textarea 
                            className={`form-control ${INPUT_CLASS} ${TEXT_THEME}`}
                            id="message"
                            value={mailData.message}
                            onChange={onChangeHandler}
                            rows="5"
                            required
                            minLength={5}
                            maxLength={500}
                        />
                        <div className="invalid-feedback" style={{width: "100%"}}>
                            Describe the Reason to Contact in 5 to 500 characters.
                        </div>
                    </div>

                    <div className="col-12 pb-3 text-center">
                        <button className="btn btn-light bg-light bg-opacity-50 shadow-lg" type="submit"><h5>Send the Message</h5></button>
                    </div>
                </form>
            </div>
            
        </div>
    )
};

export default ContactMe;

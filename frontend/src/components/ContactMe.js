import React, { useContext } from 'react';
import { SocialIcon } from "react-social-icons";
import { themeContext } from '../context/ThemeContext';

const ICON_DIM="30px";

const ContactMe = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
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
        alert(document.getElementById("message").value);
    }
    
    const { theme, textTheme, background } = useContext(themeContext);

    return (    
        <div className={`d-flex justify-content-center flex-wrap bg-${theme} text-${textTheme}`} style={{fontFamily: "kalam"}} >
            
            <div className="col-md-5 p-4 m-3 shadow-lg">
                <h1>My Contact Details</h1>
                <ul className="list-group m-3" >   
                    <div className={`list-group-item d-flex flex-wrap align-items-center bg-${theme} text-${textTheme}`}>
                        <SocialIcon className='m-2 rounded-circle shadow-lg bg-light' style={{width: ICON_DIM, height: ICON_DIM}} url={process.env.REACT_APP_MAIL_LINK}/>
                        <div>
                            <div className="h4">Mail:</div>
                            <div className='h5'>vihar2121@gmail.com</div>
                        </div>
                    </div>

                    <div className={`list-group-item d-flex flex-wrap align-items-center bg-${theme} text-${textTheme}`}>
                        <SocialIcon className='m-2 rounded-circle shadow-lg bg-light' style={{width: ICON_DIM, height: ICON_DIM}} url={process.env.REACT_APP_GITHUB_LINK}/>
                        <div>
                            <div className="h4">GitHub:</div>
                            <div className='h5'>vihar-s1</div>
                        </div>
                    </div>

                    <div className={`list-group-item d-flex flex-wrap align-items-center bg-${theme} text-${textTheme}`}>
                        <SocialIcon className='m-2 rounded-circle shadow-lg bg-light' style={{width: ICON_DIM, height: ICON_DIM}} url={process.env.REACT_APP_LINKEDIN_LINK}/>
                        <div>
                            <div className="h4">Linked-In:</div>
                            <div className="h5">vihar Shah</div>
                        </div>
                    </div>

                    <div className={`list-group-item d-flex flex-wrap align-items-center bg-${theme} text-${textTheme}`}>
                        <SocialIcon className='m-2 rounded-circle shadow-lg bg-light' style={{width: ICON_DIM, height: ICON_DIM}} url={process.env.REACT_APP_WHATSAPP_LINK} network="whatsapp"/>
                        <div>
                            <div className="h4">WhatsApp:</div>
                            <div className="h5">+91 9377402438</div>
                        </div>
                    </div>
                </ul>
            </div>

            <div className='col-md-6 p-4 m-3 shadow-lg' >
                <h1>Send Me a Message !</h1>
                <form className={`row g-3 needs-validation text-${textTheme}`} noValidate onSubmit={handleSubmit}>
                    <div className="col-md-7">
                        <label htmlFor="firstName" className="form-label h5">Your Name</label>
                        <input type="text" className={`form-control bg-${theme} text-${textTheme}`} id="firstName" required />
                        <div className="invalid-feedback">
                            Please enter your Name!
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="email" className="form-label h4">Email</label>
                        <input type="email" className={`form-control bg-${theme} text-${textTheme}`} id="email" required />
                        <div className="invalid-feedback">
                            Please enter valid Email!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="type" className="form-label h5">Are You An:</label>
                        <div>
                            <input type="radio" className="btn-check" name="type" id="individual" autoComplete="off" defaultChecked />
                            <label className={`btn btn-outline-${theme == "dark" ? "light" : "dark"} mx-3`} htmlFor="individual">Individual</label>

                            <input type="radio" className="btn-check" name="type" id="company" autoComplete="off" />
                            <label className={`btn btn-outline-${theme == "dark" ? "light" : "dark"} mx-3`} htmlFor="company">Group</label>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <label htmlFor="subject" className="form-label h5">Subject</label>
                        <input type="text" className={`form-control bg-${theme} text-${textTheme}`} id="subject" required />
                        <div className="invalid-feedback">
                            Enter the Reason to Contact Here.
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="message" className="form-label h5">Message</label>
                        <textarea id="message" className={`form-control bg-${theme} text-${textTheme}`} rows="5" required/>
                        <div className="invalid-feedback">
                            Describe the Reason to Contact Here.
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <button className={`btn btn-${theme == "dark" ? "light" : "dark"}`} type="submit"><div className="h5">Send Message</div></button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ContactMe;

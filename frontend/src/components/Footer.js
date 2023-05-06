import React from 'react';
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    	<footer className="bg-secondary bg-opacity-25 text-center text-white ">
        	<div className="container">
            	<SocialIcon className='mx-2 my-2 rounded-circle shadow-lg' style={{width: "40px", height: "40px"}} url={process.env.REACT_APP_MAIL_LINK}/>
            	<SocialIcon className='mx-2 my-2 rounded-circle shadow-lg' style={{width: "40px", height: "40px"}} url={process.env.REACT_APP_GITHUB_LINK}/>
            	<SocialIcon className='mx-2 my-2 rounded-circle shadow-lg' style={{width: "40px", height: "40px"}} url={process.env.REACT_APP_LINKEDIN_LINK}/>
            	<SocialIcon className='mx-2 my-2 rounded-circle shadow-lg' style={{width: "40px", height: "40px"}} url={process.env.REACT_APP_WHATSAPP_LINK} network="whatsapp"/>
        	</div>
			<div className="text-center fst-italic h3 p-2" style={{backgroundColor: "rgba(0, 0, 0, 0.4)", fontFamily: "satisfy"}}>
				Made by Vihar Shah
			</div>
    	</footer>
  	);
}

export default Footer;

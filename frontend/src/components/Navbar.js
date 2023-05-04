import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_DIMENSIONS = "40px";
const NAVBAR_COLOR = "#c3d2ff";


const Navbar = () => {
    const location = useLocation();
  	return (
    	<nav className="navbar shadow-lg navbar-expand-sm fw-bold sticky-top" style={{backgroundColor: NAVBAR_COLOR, fontFamily: "dancing scripts"}}>
  			<div className="container-fluid">
    			<img className="navbar-brand" src="logo.png" alt="Vihar Shah" width={LOGO_DIMENSIONS} height={LOGO_DIMENSIONS}/>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">				
					<nav className="navbar-nav me-auto mb-2 mb-lg-0">
						<Link className={`nav-link ${location.pathname == "/" ? "active" : "" }`} to="/">Home</Link>
						<Link className={`nav-link ${location.pathname == "/aboutme" ? "active" : "" }`} to="/aboutme">About Me</Link>
						<Link className={`nav-link ${location.pathname == "/projects" ? "active" : "" }`} to="/projects">Projects</Link>
						<Link className={`nav-link ${location.pathname == "/education" ? "active" : "" }`} to="/education">Education</Link>
						<Link className={`nav-link ${location.pathname == "/contactme" ? "active" : "" }`} to="/contactme">Contact Me</Link>
						<Link className={`nav-link ${location.pathname == "/certificates" ? "active" : "" }`} to="/certificates">Certificates</Link>
						
					</nav>
				</div>
			</div>
		</nav>
  	);
}

export default Navbar;

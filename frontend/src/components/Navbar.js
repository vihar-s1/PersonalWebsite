import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_DIMENSIONS = "40px";
const NAVBAR_BG = "#c3d2ff";


const Navbar = () => {
    const location = useLocation();
	const [theme, setTheme] = useState(localStorage.getItem("theme"));
	const [navbarBg, setNavbarBg] = useState(localStorage.getItem("navbarBg"));
	
	const toggleTheme = () => {
		if (theme == "dark"){
			localStorage.setItem("theme", "light");
			setTheme("light");
			localStorage.setItem("navbarBg", NAVBAR_BG);
			setNavbarBg(NAVBAR_BG);
		}
		else{
			localStorage.setItem("theme", "dark");
			setTheme("dark");
			localStorage.setItem("navbarBg", "#000000");
			setNavbarBg("#000000");
		}
	}

  	return (
    	<nav className={`navbar shadow-lg navbar-expand-sm navbar-${theme} fw-bold sticky-top`} style={{backgroundColor: navbarBg, fontFamily: "dancing scripts"}}>
  			<div className="container-fluid">
    			
				<img className="navbar-brand" src="logo.png" alt="Vihar Shah" width={LOGO_DIMENSIONS} height={LOGO_DIMENSIONS}/>
				
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarLinks">				
					<nav className="navbar-nav me-auto mb-2 mb-lg-0">
						<Link className={`nav-link ${location.pathname == "/" ? "active" : "" }`} to="/">Home</Link>
						<Link className={`nav-link ${location.pathname == "/aboutme" ? "active" : "" }`} to="/aboutme">About Me</Link>
						<Link className={`nav-link ${location.pathname == "/projects" ? "active" : "" }`} to="/projects">Projects</Link>
						<Link className={`nav-link ${location.pathname == "/education" ? "active" : "" }`} to="/education">Education</Link>
						<Link className={`nav-link ${location.pathname == "/contactme" ? "active" : "" }`} to="/contactme">Contact Me</Link>
						<Link className={`nav-link ${location.pathname == "/certificates" ? "active" : "" }`} to="/certificates">Certificates</Link>
						
					</nav>
				</div>
				{
					theme == "dark" ? 
					<button className='btn btn-outline-secondary bi bi-brightness-high-fill shadow-lg' onClick={toggleTheme} /> :
					<button className="btn btn-outline-secondary bi bi-moon-stars-fill shadow-lg" onClick={toggleTheme} />
				}
			</div>
		</nav>
  	);
}

export default Navbar;

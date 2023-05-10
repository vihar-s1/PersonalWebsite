import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { themeContext } from '../context/ThemeContext';

const LOGO_DIMENSIONS = "40px";


const Navbar = () => {
    const location = useLocation();
	
	const { theme, background, textTheme, toggleTheme } = useContext(themeContext);

  	return (
    	<nav className={`navbar shadow-lg navbar-expand-sm navbar-${theme} sticky-top`} style={{backgroundColor: background, fontFamily: "lobster"}}>
  			<div className="container-fluid">
					{ console.log(theme) }
					{ console.log(background) }
					{ console.log(textTheme) }
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
					<button className='btn btn-outline-light bi bi-brightness-high-fill shadow-lg' onClick={toggleTheme} /> :
					<button className="btn btn-outline-dark bi bi-moon-stars-fill shadow-lg" onClick={toggleTheme} />
				}
			</div>
		</nav>
  	);
}

export default Navbar;

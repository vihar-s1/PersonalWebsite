import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { themeContext } from "../context/ThemeContext";

const LOGO_DIMENSIONS = "40px";

const Navbar = () => {
    const location = useLocation();

    const { theme, background, textTheme, toggleTheme } =
        useContext(themeContext);

    return (
        <nav className={`navbar shadow-lg navbar-expand-sm navbar-${theme}`} aria-label="Offcanvas navbar large" style={{background: background}}>
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img className="navbar-brand mx-2" src="logo.png" alt="Vihar Shah" width={LOGO_DIMENSIONS} height={LOGO_DIMENSIONS}/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div 
                    className={`offcanvas offcanvas-start text-${textTheme}`}
                    tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
                    style={{background: background, width: "fit-content"}}
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title pe-5" id="offcanvasNavbarLabel">Navbar</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
		 						<Link className={`nav-link ${location.pathname == "/" ? "active" : "" }`} to="/">Home</Link>
		 						<Link className={`nav-link ${location.pathname == "/aboutme" ? "active" : "" }`} to="/aboutme">About Me</Link>
		 						<Link className={`nav-link ${location.pathname == "/projects" ? "active" : "" }`} to="/projects">Projects</Link>
		 						<Link className={`nav-link ${location.pathname == "/education" ? "active" : "" }`} to="/education">Education</Link>
		 						<Link className={`nav-link ${location.pathname == "/contactme" ? "active" : "" }`} to="/contactme">Contact Me</Link>
		 						<Link className={`nav-link ${location.pathname == "/certificates" ? "active" : "" }`} to="/certificates">Certificates</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import Certificates from "./components/Certificates";
import ToggleTheme from "./components/ToggleTheme";


const App = () => {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contactme" element={<ContactMe />} />
                <Route path="/certificates" element={<Certificates />} />
            </Routes>
            <ToggleTheme />
            <Footer />
        </Router>
    );
}

export default App;

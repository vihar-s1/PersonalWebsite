import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";


const App = () => {
    useEffect(() => {
        if (!localStorage.getItem("theme") || !localStorage.getItem("navbarBg"))
        {
            localStorage.setItem("theme", "dark");
            localStorage.setItem("navbarBg", "#000000");
        }
    });

    return (
        <Router>
            <Navbar />
            <Introduction />
            <Footer />
        </Router>
    );
}

export default App;

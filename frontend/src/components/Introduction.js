import React from 'react'
import { useLocation } from 'react-router-dom';

const Introduction = () => {
    const name = "Vihar Shah";
    const role = "Developer"
    // const location = useLocation();
    return (
        <divc style={{background: "url(wallpaper1.jpeg) no-repeat center center/cover"}}>
            <div className='container text-left p-4 text-light' style={{fontFamily: "Satisfy"}}>
                <h1>Hi! My name is {name}.</h1>
                <h1>I am a {role}.</h1>
            </div>
        </divc>
    )
}

export default Introduction;

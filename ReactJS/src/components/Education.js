import React, { useContext } from "react";
import  { Link } from "react-router-dom";
import { themeContext } from "../context/ThemeContext";

import EducationDetails from "../json/EducationDetails.json"

const DegreeCard = ({ degree }) => {
    return (
        <Link className="text-decoration-none" to={degree.link} target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}>
            <div className="card m-3 bg-primary bg-opacity-25">
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <h4>{degree.title}</h4>
                        <p className="mb-0">
                            {degree.institute} (Batch {degree.passingYear})
                        </p>
                    </div>
                    <div className="align-self-center">
                        <div className="h3 mb-0">{degree.score}/{degree.total}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const Education = () => {

    const { theme, textTheme } = useContext(themeContext);

    return (
        <div className={`text-${textTheme} text-bg-${theme}`} 
            style={{fontFamily: "kalam", background: "url(/images/ocean.jpg) center center/cover"}}
        >
            <h1 className="text-center">My Educational Journey</h1>
            <div className="py-3">
                {
                    EducationDetails !== undefined &&
                    EducationDetails.map((edu, index) => {
                        return (
                            <DegreeCard key={index} degree={edu}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Education;

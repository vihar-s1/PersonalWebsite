import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import myProjects from "../json/Projects.json";
import { themeContext } from '../context/ThemeContext';

const ProjectCard = ({ project }) => {
    return (
        <div
            className="card projectCard col-md-3 mx-1 my-3"
            style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg')", minHeight: "230px"}}
        >
            <div className="card-body text-light">
                <div className="card-title fs-4">{project.title}</div>
                <div className="card-text fs-5">{project.brief.length > 70 ? project.brief.slice(0, 67)+"..." : project.brief}</div>

            </div>
            <div className="d-flex flex-wrap align-items-center">
                { project.tools !== undefined && 
                    project.tools.map((tool, index) => {
                        return (
                            <h5 key={index}><span className="badge bg-secondary bg-opacity-25 m-1">{tool}</span></h5>
                        )
                    })
                }
            </div>
            <div className="btn-group">
                <Link className="btn btn-light opacity-50">
                    View Details
                </Link>
                <Link className="btn btn-light opacity-50" to={project.liveLink ? project.liveLink : project.link} target="_blank" rel="noopener noreferrer">
                    Project Link
                </Link>
            </div>
        </div>
    )
}

const Projects = () => {

    const { theme, textTheme } = useContext(themeContext);

    return (
        <div className={`text-bg-${theme} text-${textTheme}`} style={{fontFamily: "kalam"}}>
            <h1 className="text-center">My Projects</h1>
            <div className="d-flex flex-wrap align-items-center justify-content-around">
                {
                    myProjects !== undefined && myProjects.map((myProject, index) => {
                        return (
                            <ProjectCard project={myProject} key={index} />
                        )
                    })
                }
            </div>

        </div>
    )
};

export default Projects;

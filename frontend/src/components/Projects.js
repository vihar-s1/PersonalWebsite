import React, { useContext, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import myProjects from "../json/Projects.json";
import { themeContext } from '../context/ThemeContext';

const ProjectCard = ({ project, cardIndex, viewDetailsButton }) => {

    const capitalize = (sentence) => {
        const words = sentence.split(" ").filter( word => { return word.length > 0; } );
        for (var i=0; i<words.length; i++)
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();

        return words.join(" ");
    }

    return (
        <div
            className="card projectCard col-md-3 mx-1 my-3"
            style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg')", minHeight: "230px"}}
        >
            <div className="card-body text-light">
                <div className="card-title fs-4">{capitalize(project.title)}</div>
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
                <Link className="btn btn-light opacity-50"
                    onClick={() => { viewDetailsButton(cardIndex); }}
                >
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

    const triggerModalButton = useRef(null);
    const { theme, textTheme } = useContext(themeContext);
    
    const [modalDetails, setModalDetails] = useState({});

    const viewDetailsButton = (index) => {
        setModalDetails(myProjects[index]);
        triggerModalButton.current.click();
    }

    const capitalize = (sentence) => {
        const words = sentence.split(" ").filter( word => { return word.length > 0; } );
        for (var i=0; i<words.length; i++)
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();

        return words.join(" ");
    }

    return (
        <>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary d-none" ref={triggerModalButton} data-bs-toggle="modal" data-bs-target="#ProjectDetails" />

            {/* Modal */}
            <div className="modal fade" id="ProjectDetails" tabIndex="-1" aria-labelledby="ProjectDetailsLabel" aria-hidden="true"
                style={{fontFamily: "cursive"}}
            >
                <div className="modal-dialog modal-xl">
                    <div className={`modal-content text-${textTheme} bg-${theme}`}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-2" id="ProjectDetailsLabel">{modalDetails.title !== undefined && capitalize(modalDetails.title)}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="h4">Tools Used</div>
                                <div className="d-flex flex-wrap">
                                    {
                                        modalDetails.tools !== undefined && modalDetails.tools.map((tool, index) => {
                                            return ( <h6 className="m-1 customModalItem rounded" key={index}><span className="badge bg-secondary">{tool}</span></h6> );
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="h4">Description</div>
                                <ul className="list-group list-group-numbered customModalItem">
                                    {
                                        modalDetails.description !== undefined && modalDetails.description.map((step, index) => {
                                            return (
                                                <li className={`list-group-item bg-${theme} text-${textTheme}`} key={index}>{step}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <div>
                                <Link type="button" className="btn btn-sm btn-secondary customModalItem" to={modalDetails.link}  target="_blank" rel="noopener noreferrer">Project Code Link</Link>
                                {modalDetails.liveLink !== undefined && <Link type="button" className="ms-2 btn btn-sm btn-secondary  customModalItem" data-bs-dismiss="modal" to={modalDetails.liveLink} target="_blank" rel="noopener noreferrer">Live Demo Link</Link> }
                            </div>
                            <button type="button" className="btn btn-secondary customModalItem" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`text-bg-${theme} text-${textTheme}`} style={{fontFamily: "kalam"}}>
                <h1 className="text-center">My Projects</h1>
                <div className="d-flex flex-wrap align-items-center justify-content-around">
                    {
                        myProjects !== undefined && myProjects.map((myProject, index) => {
                            return (
                                <ProjectCard key={index} cardIndex={index} project={myProject} viewDetailsButton={viewDetailsButton} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};

export default Projects;

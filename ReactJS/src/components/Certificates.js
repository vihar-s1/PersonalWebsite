import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { themeContext } from "../context/ThemeContext";

import certificateDetails from "../json/Certificates.json";

const CertificateCard = ({ certificate, cardIndex, viewDetailsButton }) => {

    return (
        <div
            className="card projectCard col-md-3 mx-1 my-3"
            style={{background: "url(/images/ocean.jpg)", minHeight: "230px"}}
        >
            <div className="card-body text-light">
                <div className="card-title fs-4 d-flex justify-content-between align-items-center">
                    {certificate.name}
                    <div>
                        <h6><span className="badge bg-secondary bg-opacity-50 m-1 text-wrap">Year {certificate.year}</span></h6>
                        <h6><span className="badge bg-secondary bg-opacity-50 m-1 text-wrap">{certificate.location}</span></h6>
                    </div>
                </div>
                <div className="card-text fs-6">{certificate.description}</div>

            </div>
            <Link className="btn btn-light opacity-50" to={certificate.link} target="_blank" rel="noopener noreferrer">
                See Certificate
            </Link>
        </div>
    )
}

const Certificates = () => {
    
    const { theme, textTheme } = useContext(themeContext)

    return (
        <div className={`bg-${theme} text-${textTheme}`} style={{fontFamily: "kalam"}}>
            <h1 className="text-center">My Certificates</h1>
            <div className="py-3 d-flex flex-wrap align-items-center justify-content-around">
                {
                    certificateDetails !== undefined && certificateDetails.map((certificate, index) => {
                        return (
                            <CertificateCard certificate={certificate} key={index} />
                        );
                    })
                }
            </div>
        </div>
    )
};

export default Certificates;

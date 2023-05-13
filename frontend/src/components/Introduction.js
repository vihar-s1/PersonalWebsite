import React from 'react'

const Introduction = () => {
    const name = "Vihar Shah";
    const role = "Developer";
    return (
        <div style={{background: "url(introduction.jpeg) no-repeat center center/cover"}}>
            <div className="container py-5" style={{fontFamily: "satisfy", color: "rgb(255, 255, 0)"}}>
                <div className="p-5 text-center rounded-3">
                    <p className="fw-bold fs-1">I am Vihar Shah</p>
                    <p className="col-lg-8 mx-auto fs-3 fw-bold">
                        Welcome to my website. See my projects, certificates, and resume, or just contact me through the contact me form!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introduction;

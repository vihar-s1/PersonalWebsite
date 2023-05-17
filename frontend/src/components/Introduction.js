import React from 'react'

const Introduction = () => {
    const name = "Vihar Shah";
    const role = "Developer";
    return (
        <div style={{background: "url(introduction.webp) no-repeat center center/cover"}}>
            <div className="container text-light py-5" style={{fontFamily: "satisfy"}}>
                <div className="p-5 text-center rounded-3">
                    <p className="display-4 fst-italic">I am Vihar Shah</p>
                    <p className="col-lg-8 mx-auto fs-3">
                        Welcome to my website. See my projects, certificates, and resume, or just contact me through the contact me form!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introduction;

import React from "react";

const Footer = ({profile}) => {
    return (
        <div className="bg-primary">
            <div className="container flex flex-col justify-between py-6 sm:flex-row">
                <p className="text-center font-body text-slate-200 md:text-left">
                    Template Modified from <a className="text-slate-400 hover:underline hover:text-slate-50 transition-all" href="https://atom.redpixelthemes.com/">https://atom.redpixelthemes.com/</a>
                </p>
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                    <a
                        href={`mailto:${profile.mail}`}
                        target="_blank"
                        className="pl-4"
                    >
                        <i className="bx bxl-gmail text-2xl text-white hover:text-yellow transition-colors"></i>
                    </a>
                    <a
                        href={profile.github}
                        target="_blank"
                        className="pl-4"
                    >
                        <i className="bx bxl-github text-2xl text-white hover:text-yellow transition-colors"></i>
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        className="pl-4"
                    >
                        <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow transition-colors"></i>
                    </a>
                    <a
                        href={profile.whatsapp}
                        target="_blank"
                        className="pl-4"
                    >
                        <i className="bx bxl-whatsapp text-2xl text-white hover:text-yellow transition-colors"></i>
                    </a>
                    <a
                        href={profile.instagram}
                        target="_blank"
                        className="pl-4"
                    >
                        <i className="bx bxl-instagram text-2xl text-white hover:text-yellow transition-colors"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;

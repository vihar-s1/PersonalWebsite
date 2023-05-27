import React from "react";

const AboutMe = ({ profile }) => {
    return (
        <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
                <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                    <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Who am I?
                    </h2>
                    <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        I'm {profile.name}
                    </h4>
                    <p className="pt-6 font-body leading-relaxed text-grey-20">
                        {profile.about}
                    </p>
                    <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                        <div className="flex items-center justify-center sm:justify-start">
                            <p className="font-body text-lg font-semibold uppercase text-grey-20">
                                Connect with me
                            </p>
                            <div className="hidden sm:block">
                                <i className="bx bx-chevron-right text-2xl text-primary"></i>
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                            <a
                                href={`mailto:${profile.mail}`}
                                target="_blank"
                                className="pl-4"
                            >
                                <i className="bx bxl-gmail text-2xl text-primary hover:text-yellow"></i>
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                className="pl-4"
                            >
                                <i className="bx bxl-github text-2xl text-primary hover:text-yellow"></i>
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                className="pl-4"
                            >
                                <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                            </a>
                            <a
                                href={profile.whatsapp}
                                target="_blank"
                                className="pl-4"
                            >
                                <i className="bx bxl-whatsapp text-2xl text-primary hover:text-yellow"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

import React, { useState } from "react";

const NavBar = ({ profile }) => {
    const [mobileViewClass, setmobileViewClass] = useState("pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden");

    const enableMobileView = () => {
        setmobileViewClass("opacity-100 z-70 pointer-events-auto md:hidden");
    }

    const disableMobileView = () => {
        setmobileViewClass("pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity md:hidden");
    }

    return (
        <>
            <div className="bg-[#493798]">
                <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary">
                    <div className="container flex items-center justify-around">
                        <div>
                            <a href="/">
                                <h2 className="text-white text-4xl font-bold">{profile.title}</h2>
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex items-center">
                                <li className="group pl-6">
                                    <a href="/#about" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white" >
                                        About
                                    </a>
                                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                                </li>
                                <li className="group pl-6">
                                    <a href="/#skills" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white" >
                                        Skills
                                    </a>
                                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                                </li>
                                <li className="group pl-6">
                                    <a href="/#portfolio" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white" >
                                        Portfolio
                                    </a>
                                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                                </li>
                                <li className="group pl-6">
                                    <a href="/#work" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white" >
                                        Work
                                    </a>
                                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                                </li>
                                <li className="group pl-6">
                                    <a href="/#contact" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white" >
                                        Contact
                                    </a>
                                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                                </li>
                            </ul>
                        </div>
                        <div className="block md:hidden">
                            <button onClick={enableMobileView}>
                                <i className="bx bx-menu text-4xl text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={mobileViewClass}>
                    <div className="fixed z-70 top-0 right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow-2xl md:w-1/3">
                        <button onClick={disableMobileView} className="absolute top-0 right-0 mt-4 mr-4">
                            <img
                                src="/icons/close.svg"
                                className="h-10 w-auto"
                                alt=""
                            />
                        </button>

                        <ul className="mt-8 flex flex-col">
                            <li className="py-2">
                                <a href="/#about" className="pt-0.5 font-header font-semibold uppercase text-white" >
                                    About
                                </a>
                            </li>

                            <li className="py-2">
                                <a href="/#skills" className="pt-0.5 font-header font-semibold uppercase text-white" >
                                    Skills
                                </a>
                            </li>

                            <li className="py-2">
                                <a href="/#portfolio" className="pt-0.5 font-header font-semibold uppercase text-white" >
                                    Portfolio
                                </a>
                            </li>

                            <li className="py-2">
                                <a href="/#work" className="pt-0.5 font-header font-semibold uppercase text-white" >
                                    Work
                                </a>
                            </li>

                            <li className="py-2">
                                <a href="/#contact" className="pt-0.5 font-header font-semibold uppercase text-white" >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;

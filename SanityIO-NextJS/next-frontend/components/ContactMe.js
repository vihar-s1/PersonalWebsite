import React from "react";

const ContactMe = ({ profile }) => {
    return (
        <div className="container py-16 md:py-20" id="contact">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Here's a contact form
            </h2>
            <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
                <p className="font-body text-grey-10">
                    Just write your name, your email, and the message and I will
                    reach out to you soon !
                </p>
            </div>
            <form className="mx-auto w-full pt-10 sm:w-3/4">
                <div className="flex flex-col md:flex-row">
                    <input
                        className="mr-3 w-full rounded shadow-sm shadow-purple-600 border-purple-200 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                        placeholder="Name"
                        type="text"
                        id="name"
                    />
                    <input
                        className="mt-6 w-full rounded shadow-sm shadow-purple-600 border-purple-200 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                        placeholder="Email"
                        type="text"
                        id="email"
                    />
                </div>
                <textarea
                    className="mt-6 w-full rounded shadow-sm shadow-purple-600 border-purple-200 px-4 py-3 font-body text-black md:mt-8"
                    placeholder="Message"
                    id="message"
                    cols="30"
                    rows="10"
                ></textarea>
                <button className="mt-6 flex items-center justify-center rounded shadow-md shadow-purple-600 bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
                    Send
                    <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
                </button>
            </form>

            <div className="flex flex-col pt-16 lg:flex-row">
                <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 shadow-md shadow-purple-3f00 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
                    <div className="flex items-center">
                        <i className="bx bx-phone text-2xl text-grey-40"></i>
                        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                            My Phone
                        </p>
                    </div>
                    <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                        {profile.mobile}
                    </p>
                </div>
                <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 shadow-md shadow-purple-3f00 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                    <div className="flex items-center">
                        <i className="bx bx-envelope text-2xl text-grey-40"></i>
                        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                            My Email
                        </p>
                    </div>
                    <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                        {profile.mail}
                    </p>
                </div>
                <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 shadow-md shadow-purple-3f00 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                    <div className="flex items-center">
                        <i className="bx bx-map text-2xl text-grey-40"></i>
                        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                            My Address
                        </p>
                    </div>
                    <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                        {profile.address}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;

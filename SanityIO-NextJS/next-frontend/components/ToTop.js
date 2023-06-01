import React from "react";

const ToTop = () => {
    const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div className="fixed z-70 w-16 right-10 bottom-16">
            <button 
                className="cursor-pointer py-1 w-full bg-purple-900 rounded opacity-50 transition-opacity hover:opacity-100"
                onClick={scrollToTop}
            >
                <i className="bx bxs-arrow-to-top text-4xl text-purple-400"></i>
            </button>
        </div>
    );
};

export default ToTop;

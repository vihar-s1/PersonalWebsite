import React from "react";
import Link from "next/link";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

const ProjectCard = ({ project, urlFor }) => {
    return (
        <div className="shadow-md shadow-purple-400 transform transition-all hover:scale-105">
            <div
                style={{ backgroundImage: `url(${urlFor(project.image)})` }}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
            >
                <span className="absolute inset-0 bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                {project.projectLink != undefined && <Link
                    href={project.projectLink}
                    target="_blank"
                    className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-purple-700 bg-purple-700 bg-opacity-30 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base"
                >
                    Project Link
                </Link>}
            </div>
            <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">
                    {project.title}
                </span>
                <span className="flex justify-between text-gray-400">
                    <span>
                        {months[new Date(project.startDate).getMonth()]} {new Date(project.startDate).getFullYear()} - {months[new Date(project.endDate).getMonth()]} {new Date(project.endDate).getFullYear()}
                    </span>
                    <span>
                        Team Size: {project.teamSize}
                    </span>
                </span>
                <span className="block pt-2 font-body text-gray-700">
                    {project.brief}
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;

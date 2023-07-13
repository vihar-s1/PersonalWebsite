import React from 'react'
import Link from 'next/link';

import ProjectCard from './ProjectCard';

const Portfolio = ({ projects, urlFor }) => {
  return (
    <div className="bg-gray-100 p-3 sm:p-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Here's what I have done with the past
        </h3>

        <div className="mx-auto grid w-full gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2 2xl:grid-cols-3">
            { (projects == undefined || projects.length == 0) && "No Projects Yet!!" }
            { 
                projects != undefined &&  projects.length > 0 && projects.slice(0, 4).map((project, index) => {
                    return (
                        <ProjectCard key={index} project={project} urlFor={urlFor} />
                    )
                })
            }
        </div>
        
        {projects.length > 0 && 
            <div className="buttons text-center mt-20">
                <Link
                    className="rounded shadow-md shadow-purple-600 bg-primary px-3 py-3 font-header text-sm sm:text-2xl font-bold uppercase text-white transition-colors hover:bg-grey-20"
                    href="/projects"
                >
                    Check All Projects
                </Link>
            </div>
        }
    </div>
  )
}

export default Portfolio;

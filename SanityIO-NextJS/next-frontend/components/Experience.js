import React from 'react'

const WorkCard = ({ work }) => {
    return (
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                        <div className="block pt-2 text-2xl w-max font-bold text-primary md:text-3xl md:w-min lg:text-4xl ">{work.position}</div>
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                </div>
            </div>
            <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                    <div className="mt-1 flex">
                        <i className="bx bxs-right-arrow hidden text-primary text-p md:block"></i>
                        <div className="md:-mt-1 md:pl-8">
                            <span className="block pt-2 font-header text-sm md:text-xl font-bold uppercase text-primary">
                                {work.organization}
                            </span>
                            <span className="block font-body font-bold text-grey-40">
                                {new Date(work.startDate).toDateString()} - {new Date(work.endDate).toDateString()}
                            </span>
                            <div className="pt-2">
                                <span className="block font-body text-black">
                                    {work.description}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Experience = ({ experience }) => {
    return (
        <div className="container py-16 md:py-20" id="work">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                My work experience
            </h2>

            <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
                <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>
                {
                    experience != undefined && experience.length > 0 && experience.map((work) => {
                        return (
                            <WorkCard key={work._key} work={work}/>
                        )
                    }
                )}
            </div>
            {
                experience == undefined && 
                <div className="block text-center pt-2 font-header text-2xl font-bold text-primary md:text-4xl">I am still a Fresher looking for something !</div>
            }
        </div>
    )
}

export default Experience;
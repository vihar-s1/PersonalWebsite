import React from "react";

const SkillCard = ({ skill }) => {
    return (
        <div className="group rounded px-8 py-12 shadow-inner shadow-purple-900 hover:bg-primary hover:shadow-black transform transition-all">
            <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    {skill.name}
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    {skill.description}
                </p>
            </div>
        </div>
    )
}

const Skills = ({ skills }) => {
    return (
        <div className="containe py-16 md:py-20" id="skills">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Here's what I'm good at
            </h2>

            <div className="grid mx-5 grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3 2xl:grid-cols-4">
                {skills.length > 0 && skills.map((skill) => {
                    return (
                        <SkillCard key={skill._key} skill={skill} />
                    )
                })}
            </div>
        </div>
    );
};

export default Skills;

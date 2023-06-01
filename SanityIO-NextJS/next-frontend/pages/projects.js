import Link from "next/link";
import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

import PageHead from "@/components/PageHead";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ToTop from "@/components/ToTop";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_projectId,
    dataset: process.env.NEXT_PUBLIC_dataset,
    useCdn: false,
});
const builder = imageUrlBuilder(client);

const urlFor = (source) => {
    const image_url_builder = builder.image(source);

    try {
        return image_url_builder.url();
    } catch {
        return "/images/post-01.png";
    }
};

const projects = ({ profile }) => {
    return (
        <div>
            <PageHead title={profile.title}/>
            <NavBar profile={profile} />

            <div className="bg-grey-50" id="projects">
                <div className="container mx-auto md:py-5">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Check out all of my projects!
                    </h2>
                    <div className="px-5 mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                        {(profile.projects == undefined ||
                            profile.projects.length == 0) &&
                            "No Projects Yet!!"}
                        {profile.projects != undefined &&
                            profile.projects.length > 0 &&
                            profile.projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        project={project}
                                        urlFor={urlFor}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>

            <ToTop />
            <Footer profile={profile} />
        </div>
    );
};

export default projects;

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_projectId,
        dataset: process.env.NEXT_PUBLIC_dataset,
        useCdn: false,
    });

    const query = `*[_type == "profile"][0]`;
    const profile = await client.fetch(query);

    return {
        props: {
            profile: profile,
        },
    };
}

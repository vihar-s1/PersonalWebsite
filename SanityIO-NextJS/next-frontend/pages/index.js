import { createClient } from "next-sanity";
import Script from "next/script";
import imageUrlBuilder from "@sanity/image-url";

import PageHead from "@/components/PageHead";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";
import AboutMe from "@/components/AboutMe";
import ToTop from "@/components/ToTop";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Certificates from "@/components/Certificates";

export default function Home({ profile }) {
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
    return (
        <>
            <Script src="/assets/js/main.js" />
            <PageHead title={profile.title}/>

            <NavBar profile={profile} />

            <div>
                <AboutMe profile={profile} urlFor={urlFor} />

                <Skills skills={profile.skills} />

                <Portfolio projects={profile.projects} urlFor={urlFor} />

                <Experience experience={profile.experience} />

                <Certificates certificates={profile.certificates}/>

                <ContactMe profile={profile} />
            </div>
            
            <ToTop />
            <Footer profile={profile} />
        </>
    );
}

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_projectId,
        dataset: process.env.NEXT_PUBLIC_dataset,
        apiVersion: process.env.NEXT_PUBLIC_apiDate,
        useCdn: false,
    });

    const profileQuery = `*[_type == "profile"][0]`;
    const profile = await client.fetch(profileQuery);
    return {
        props: {
            profile: profile,
        },
    };
}

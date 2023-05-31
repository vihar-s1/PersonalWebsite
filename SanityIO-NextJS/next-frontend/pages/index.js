import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";
import AboutMe from "@/components/AboutMe";
import ToTop from "@/components/ToTop";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";

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
            <Head>
                <meta charset="utf-8" />

                <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

                <meta
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    name="viewport"
                />

                <title>{profile.title}</title>

                <meta property="og:title" content="Homepage | Atom Template" />

                <meta property="og:locale" content="en_US" />

                <link rel="canonical" href="//" />

                <meta property="og:url" content="//" />

                <meta
                    name="description"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />

                <link rel="icon" type="image/png" href="favicon.ico" />

                <meta name="theme-color" content="#5540af" />

                <meta property="og:site_name" content="Atom Template" />

                <meta property="og:image" content="/images/social.jpg" />

                <meta name="twitter:card" content="summary_large_image" />

                <meta name="twitter:site" content="@tailwindmade" />

                <link
                    crossOrigin="crossorigin"
                    href="https://fonts.gstatic.com"
                    rel="preconnect"
                />

                <link
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
                    rel="preload"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />

                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />

                <link
                    crossOrigin="anonymous"
                    href="/assets/styles/main.min.css"
                    media="screen"
                    rel="stylesheet"
                />

                <Script
                    defer
                    src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
                ></Script>

                <Script
                    defer
                    src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
                ></Script>
            </Head>

            <NavBar profile={profile} />

            <div>
                <AboutMe profile={profile} urlFor={urlFor} />

                <Skills skills={profile.skills} />

                <Portfolio projects={profile.projects} urlFor={urlFor} />

                <Experience experience={profile.experience} />

                <ContactMe profile={profile} />

            </div>
            <ToTop />
            <Footer profile={profile}/>
        </>
    );
}

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_projectId,
        dataset: process.env.NEXT_PUBLIC_dataset,
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

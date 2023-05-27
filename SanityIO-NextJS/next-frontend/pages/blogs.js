import Link from "next/link";
import { createClient } from "next-sanity";
import Head from "next/head";
import Script from "next/script";

import imageUrlBuilder from "@sanity/image-url";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const client = createClient({
    projectId: "gse4qw7e",
    dataset: "production",
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

const blogs = ({ allBlogs, profile }) => {
    return (
        <div>           
            <Head>
                <meta charset="utf-8" />

                <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

                <meta
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    name="viewport"
                />

                <title>
                    All Blogs
                </title>

                <meta
                    property="og:title"
                    content="How to become a frontend developer | Atom Template"
                />

                <meta property="og:locale" content="en_US" />

                <link rel="canonical" href="//post" />

                <meta property="og:url" content="//post" />

                <meta
                    name="description"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />

                <link
                    rel="icon"
                    href="/favicon.ico"
                />

                <meta name="theme-color" content="#5540af" />

                <meta property="og:site_name" content="Atom Template" />

                <meta property="og:image" content="/images/social.jpg" />

                <meta name="twitter:card" content="summary_large_image" />

                <meta name="twitter:site" content="@tailwindmade" />

                <link
                    crossorigin="crossorigin"
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
                    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
                    rel="stylesheet"
                />

                <link
                    crossorigin="anonymous"
                    href="/assets/styles/main.min.css"
                    media="screen"
                    rel="stylesheet"
                />

                <Script
                    defer
                    src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
                />

                <Script
                    defer
                    src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
                />

                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
                />

                <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js" />
            </Head>
            <NavBar profile={profile} />
            <div className="bg-grey-50" id="blog">
                <div className="container mx-auto md:py-5">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Check out all of my posts!
                    </h2>
                    <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                        {allBlogs.map((blog) => {
                            return (
                                <BlogCard key={blog._id} blog={blog} urlFor={urlFor} />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default blogs;

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "gse4qw7e",
        dataset: "production",
        useCdn: false,
    });

    const query = `*[_type == "blog"] | order(CreatedAt desc)`;
    const blogs = await client.fetch(query);
    const profileQuery = `*[_type == "profile"][0]`;
    const profile = await client.fetch(profileQuery);
    
    return {
        props: {
            allBlogs: blogs, profile: profile
        },
    };
}
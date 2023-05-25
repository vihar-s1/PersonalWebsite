import Link from "next/link";
import { createClient } from "next-sanity";
import Head from "next/head";
import Script from "next/script";

import imageUrlBuilder from "@sanity/image-url";
import NavBar from "../components/NavBar";

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

const blogs = (props) => {
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
            <NavBar />
            <div className="bg-grey-50" id="blog">
                <div className="container mx-auto md:py-5">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        I also like to write
                    </h2>
                    <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        Check out my latest posts!
                    </h4>
                    <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                        {props.blogs.map((blog) => {
                            return (
                                <Link
                                    key={blog._id}
                                    href={`/blogs/${blog.slug.current}`}
                                    target="_blank"
                                    className="shadow-lg shadow-purple-300"
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${urlFor(
                                                blog.BlogImage
                                            )})`,
                                        }}
                                        className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                                    >
                                        <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                                        <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-purple-700 bg-purple-700 bg-opacity-30 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base">
                                            Read More
                                        </span>
                                    </div>
                                    <div className="bg-white py-6 px-5 xl:py-8">
                                        <span className="block font-body text-lg font-semibold text-black">
                                            {blog.title}
                                        </span>
                                        <span className="block pt-2 font-body text-grey-20">
                                            {blog.MetaDescription}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
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

    const query = `*[_type == "blog"]`;
    const blogs = await client.fetch(query);
    return {
        props: {
            blogs,
        },
    };
}

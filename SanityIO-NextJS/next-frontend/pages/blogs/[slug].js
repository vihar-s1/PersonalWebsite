import { createClient } from "next-sanity";
import Head from "next/head";
import Script from "next/script";
import imageUrlBuilder from "@sanity/image-url"

import NavBar from "@/components/NavBar";
import PortableText from "react-portable-text";
import Footer from "@/components/Footer";

const Post = ({ blog, author, profile }) => {
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
    return (
        <>
            <Head>
                <meta charset="utf-8" />

                <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

                <meta
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    name="viewport"
                />

                <title>
                    { blog.title }
                </title>

                <meta
                    property="og:title"
                    content={blog.title}
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
            <div>

                <div>
                    <div className="container py-6 md:py-10">
                        <div className="mx-auto max-w-4xl">
                            <div className="">
                                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                                    {blog.title}
                                </h1>
                                <div className="flex items-center pt-5 md:pt-10">
                                    <div>
                                        <img
                                            src={urlFor(blog.author.image)}
                                            className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                                            alt="author image"
                                        />
                                    </div>
                                    <div className="pl-5">
                                        <span className="block font-body text-xl font-bold text-grey-10">
                                            By {blog.author.title}
                                        </span>
                                        <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                                            {new Date(blog._createdAt).toDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="prose max-w-none-pt-8">
                                <PortableText
                                    content={blog.content}
                                    projectId="gse4qw7e"
                                    dataset="production"
                                    serializers={{
                                        code: ({ children }) => <code>{children}</code>
                                    }}
                                />
                            </div>
                            <div className="flex pt-10">
                                {
                                    blog.tags.map((tag, index) => {
                                            return (
                                                <div key={index} className="rounded-xl mx-2 bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20" >
                                                    {tag}
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                            {/* <div className="mt-10 flex justify-between border-t border-lila py-12">
                                <a href="/" className="flex items-center">
                                    <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                                    <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                                        Previous Post
                                    </span>
                                </a>
                                <a href="/" className="flex items-center">
                                    <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                                        Next Post
                                    </span>
                                    <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                                </a>
                            </div> */}
                            <div className="mt-10 flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                                <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                                    <img
                                        src={urlFor(blog.author.image)}
                                        className="rounded-full shadow"
                                        alt="author image"
                                    />
                                </div>
                                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                                    <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                                        {blog.author.title}
                                    </h3>
                                    <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                                        {blog.author.about}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Post;

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const client = createClient({
        projectId: "gse4qw7e",
        dataset: "production",
        useCdn: false,
    });

    const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;
    const blog = await client.fetch(query);
    const profileQuery = `*[_type == "profile"][0]`;
    const profile = await client.fetch(profileQuery);
    
    blog.author = await client.fetch(`*[_id == "${blog.author.author._ref}"][0]`)

    return {
        props: {
            blog: blog,
            profile: profile
        }
    };
});
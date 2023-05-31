import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";
import BlogCard from "@/components/BlogCard";
import AboutMe from "@/components/AboutMe";
import ToTop from "@/components/ToTop";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";

export default function Home({ blogs, profile }) {
    const client = createClient({
        projectId: "gse4qw7e",
        dataset: "production",
        useCdn: false,
    });

    const builder = imageUrlBuilder(client);

    // const profile = {
    //     name: "Vihar Shah",
    //     title: "Vihar Shah",
    //     image: "",
    //     linkedin: "https://www.linkedin.com/in/vihar-shah-263685230",
    //     whatsapp: "https://wa.me/9377402438?text=Hi!%20I%20am%20",
    //     github: "https://github.com/vihar-s1",
    //     mail: "vihar2121@gmail.com"
    // }

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
                
                <Skills profile={profile}/>
                
                <Portfolio />
                
                <Experience experience={profile.experience} />

                <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
                    style={{
                        backgroundImage: "url(/images/experience-figure.png)",
                    }}
                    id="statistics"
                >
                    <div className="container">
                        <div className="mx-auto w-5/6 bg-white py-16 shadow-md shadow-black md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                                    <div>
                                        <img
                                            src="/icons/project.svg"
                                            className="mx-auto h-12 w-auto md:h-20"
                                            alt="icon project"
                                        />
                                    </div>
                                    <div className="pt-5 md:pl-5 md:pt-0">
                                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                                            12
                                        </h1>
                                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                            Finished Projects
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                                    <div>
                                        <img
                                            src="/icons/award.svg"
                                            className="mx-auto h-12 w-auto md:h-20"
                                            alt="icon award"
                                        />
                                    </div>
                                    <div className="pt-5 md:pl-5 md:pt-0">
                                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                                            3
                                        </h1>
                                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                            Awards Won
                                        </h4>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                                    <div>
                                        <img
                                            src="/icons/happy.svg"
                                            className="mx-auto h-12 w-auto md:h-20"
                                            alt="icon happy clients"
                                        />
                                    </div>
                                    <div className="pt-5 md:pl-5 md:pt-0">
                                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                                            8
                                        </h1>
                                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                            Happy Clients
                                        </h4>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                                    <div>
                                        <img
                                            src="/icons/puzzle.svg"
                                            className="mx-auto h-12 w-auto md:h-20"
                                            alt="icon puzzle"
                                        />
                                    </div>
                                    <div className="pt-5 md:pl-5 md:pt-0">
                                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                                            99
                                        </h1>
                                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                            Bugs Fixed
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100" id="blog">
                    <div className="container py-16 md:py-20">
                        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                            I also like to write
                        </h2>
                        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                            Check out my latest posts!
                        </h4>
                        <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                            {blogs.map((blog) => {
                                return (
                                    <BlogCard
                                        key={blog._id}
                                        blog={blog}
                                        urlFor={urlFor}
                                    />
                                );
                            })}
                        </div>

                        <div className="buttons text-center mt-20">
                            <Link
                                className="rounded shadow-md shadow-purple-600 bg-primary px-8 py-3 font-header text-2xl font-bold uppercase text-white transition-colors hover:bg-grey-20"
                                href="/blogs"
                            >
                                Check All Blogs
                            </Link>
                        </div>
                    </div>
                </div>

                <ContactMe profile={profile} />
            </div>
            <ToTop />
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "gse4qw7e",
        dataset: "production",
        useCdn: false,
    });

    const query = `*[_type == "blog"][0...3]`;
    const blogs = await client.fetch(query);
    const profileQuery = `*[_type == "profile"][0]`;
    const profile = await client.fetch(profileQuery);
    console.log(profile)
    return {
        props: {
            blogs: blogs,
            profile: profile,
        },
    };
}

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";
import BlogCard from "@/components/BlogCard";
import AboutMe from "@/components/AboutMe";

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
        const image_url_builder =  builder.image(source);
    
        try { return image_url_builder.url(); }
        catch { return "/images/post-01.png"; }
    }
    return (
        <>
            <Script src="/assets/js/main.js" />
            <Head>
                <meta charset="utf-8" />

                <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

                <meta
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    name="viewport"
                />

                <title>{profile.title} | Developer </title>

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

                <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />

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
                    crossorigin="anonymous"
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
                <div
                    className="relative bg-cover bg-center bg-no-repeat py-8"
                    style={{ backgroundImage: "url(/images/bg-hero.jpg)" }}
                >
                    <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

                    <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                        <div className="flex flex-col items-center justify-center lg:flex-row">
                            <div className="rounded-full border-8 border-primary shadow-xl">
                                <img
                                    src={urlFor(profile.image)}
                                    className="h-48 rounded-full sm:h-56"
                                    alt="author"
                                />
                            </div>
                            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                                    Hello I'm {profile.name}!
                                </h1>
                                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                                        <p className="font-body text-lg uppercase text-white">
                                            Let's connect
                                        </p>
                                        <div className="hidden sm:block">
                                            <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                                        <a href={`mailto:${profile.mail}`} target="_blank" className="pl-4">
                                            <i className="bx bxl-gmail text-2xl text-white hover:text-yellow"></i>
                                        </a>
                                        <a href={profile.github} target="_blank" className="pl-4">
                                            <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
                                        </a>
                                        <a href={profile.linkedin} target="_blank" className="pl-4">
                                            <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                                        </a>
                                        <a href={profile.whatsapp} target="_blank" className="pl-4">
                                            <i className="bx bxl-whatsapp text-2xl text-white hover:text-yellow"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <AboutMe profile={profile}/>

                <div className="container py-16 md:py-20" id="services">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Here's what I'm good at
                    </h2>
                    <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        These are the services Ioffer
                    </h3>

                    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                                <div className="hidden group-hover:block">
                                    <img
                                        src="/icons/development-white.svg"
                                        alt="development icon"
                                    />
                                </div>
                                <div className="block group-hover:hidden">
                                    <img
                                        src="/icons/development-black.svg"
                                        alt="development icon"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                                    WEB DEVELOPMENT
                                </h3>
                                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                                <div className="hidden group-hover:block">
                                    <img
                                        src="/icons/content-white.svg"
                                        alt="content marketing icon"
                                    />
                                </div>
                                <div className="block group-hover:hidden">
                                    <img
                                        src="/icons/content-black.svg"
                                        alt="content marketing icon"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                                    Technical Writing
                                </h3>
                                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                                <div className="hidden group-hover:block">
                                    <img
                                        src="/icons/mobile-white.svg"
                                        alt="Mobile Application icon"
                                    />
                                </div>
                                <div className="block group-hover:hidden">
                                    <img
                                        src="/icons/mobile-black.svg"
                                        alt="Mobile Application icon"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                                    Mobile Development
                                </h3>
                                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                                <div className="hidden group-hover:block">
                                    <img
                                        src="/icons/email-white.svg"
                                        alt="Email Marketing icon"
                                    />
                                </div>
                                <div className="block group-hover:hidden">
                                    <img
                                        src="/icons/email-black.svg"
                                        alt="Email Marketing icon"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                                    Email Development
                                </h3>
                                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                                <div className="hidden group-hover:block">
                                    <img
                                        src="/icons/design-white.svg"
                                        alt="Theme Design icon"
                                    />
                                </div>
                                <div className="block group-hover:hidden">
                                    <img
                                        src="/icons/design-black.svg"
                                        alt="Theme Design icon"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                                    Graphic Design
                                </h3>
                                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                                <div className="hidden group-hover:block">
                                    <img
                                        src="/icons/graphics-white.svg"
                                        alt="Graphic Design icon"
                                    />
                                </div>
                                <div className="block group-hover:hidden">
                                    <img
                                        src="/icons/graphics-black.svg"
                                        alt="Graphic Design icon"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                                    Web Design
                                </h3>
                                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-16 md:py-20" id="portfolio">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Check out my Portfolio
                    </h2>
                    <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        Here's what I have done with the past
                    </h3>

                    <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                        <a
                            href="/"
                            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                        >
                            <img
                                src="/images/portfolio-apple.jpeg"
                                className="w-full shadow"
                                alt="portfolio image"
                            />
                        </a>
                        <a
                            href="/"
                            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                        >
                            <img
                                src="/images/portfolio-stripe.jpeg"
                                className="w-full shadow"
                                alt="portfolio image"
                            />
                        </a>
                        <a
                            href="/"
                            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                        >
                            <img
                                src="/images/portfolio-fedex.jpeg"
                                className="w-full shadow"
                                alt="portfolio image"
                            />
                        </a>
                        <a
                            href="/"
                            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                        >
                            <img
                                src="/images/portfolio-microsoft.jpeg"
                                className="w-full shadow"
                                alt="portfolio image"
                            />
                        </a>
                    </div>
                </div>

                <div className="bg-grey-50" id="clients">
                    <div className="container py-16 md:py-20">
                        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
                            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                                My latest clients
                            </h2>
                            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                                <span className="m-8 block">
                                    <img
                                        src="/icons/logo-coca-cola.svg"
                                        alt="client logo"
                                        className="mx-auto block h-12 w-auto"
                                    />
                                </span>
                                <span className="m-8 block">
                                    <img
                                        src="/icons/logo-apple.svg"
                                        alt="client logo"
                                        className="mx-auto block h-12 w-auto"
                                    />
                                </span>

                                <span className="m-8 block">
                                    <img
                                        src="/icons/logo-netflix.svg"
                                        alt="client logo"
                                        className="mx-auto block h-12 w-auto"
                                    />
                                </span>

                                <span className="m-8 block">
                                    <img
                                        src="/icons/logo-amazon.svg"
                                        alt="client logo"
                                        className="mx-auto block h-12 w-auto"
                                    />
                                </span>

                                <span className="m-8 block">
                                    <img
                                        src="/icons/logo-stripe.svg"
                                        alt="client logo"
                                        className="mx-auto block h-12 w-auto"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-16 md:py-20" id="work">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        My work experience
                    </h2>
                    <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        Here's what I did before freelancing
                    </h3>

                    <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
                        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                            <div className="md:w-2/5">
                                <div className="flex justify-center md:justify-start">
                                    <span className="shrink-0">
                                        <img
                                            src="/icons/logo-spotify.svg"
                                            className="h-auto w-32"
                                            alt="company logo"
                                        />
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
                                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                        <div className="md:-mt-1 md:pl-8">
                                            <span className="block font-body font-bold text-grey-40">
                                                Apr 2015 - Mar 2018
                                            </span>
                                            <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                                                Frontend Developer
                                            </span>
                                            <div className="pt-2">
                                                <span className="block font-body text-black">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Vestibulum mattis felis
                                                    vitae risus pulvinar
                                                    tincidunt. Nam ac venenatis
                                                    enim.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                            <div className="md:w-2/5">
                                <div className="flex justify-center md:justify-start">
                                    <span className="shrink-0">
                                        <img
                                            src="/icons/logo-microsoft.svg"
                                            className="h-auto w-32"
                                            alt="company logo"
                                        />
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
                                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                        <div className="md:-mt-1 md:pl-8">
                                            <span className="block font-body font-bold text-grey-40">
                                                Mar 2018 - September 2019
                                            </span>
                                            <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                                                Software Engineer
                                            </span>
                                            <div className="pt-2">
                                                <span className="block font-body text-black">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Vestibulum mattis felis
                                                    vitae risus pulvinar
                                                    tincidunt. Nam ac venenatis
                                                    enim.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                            <div className="md:w-2/5">
                                <div className="flex justify-center md:justify-start">
                                    <span className="shrink-0">
                                        <img
                                            src="/icons/logo-fedex.svg"
                                            className="h-auto w-32"
                                            alt="company logo"
                                        />
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
                                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                        <div className="md:-mt-1 md:pl-8">
                                            <span className="block font-body font-bold text-grey-40">
                                                October 2019 - Feb 2021
                                            </span>
                                            <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                                                DevOps Engineer
                                            </span>
                                            <div className="pt-2">
                                                <span className="block font-body text-black">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Vestibulum mattis felis
                                                    vitae risus pulvinar
                                                    tincidunt. Nam ac venenatis
                                                    enim.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
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

                <div className="bg-grey-50" id="blog">
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
                                    <BlogCard key={blog._id} blog={blog} urlFor={urlFor} />
                                );
                            })}
                        </div>
                        
                        <div className="buttons text-center mt-20">
                            <Link className="bg-purple-700 shadow-lg shadow-purple-700 text-white border-2 px-10 py-4 rounded-2xl text-3xl" href="/blogs">Check All Blogs</Link>
                        </div>
                    </div>
                </div>

                <ContactMe profile={profile}/>
            </div>

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
    return {
        props: {
            blogs: blogs, profile: profile
        },
    };
}

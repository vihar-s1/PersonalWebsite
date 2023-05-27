import React from "react";
import Link from "next/link";

const BlogCard = ({ blog, urlFor }) => {
    return (
        <Link
            href={`/blogs/${blog.slug.current}`}
            target="_blank"
            className="shadow shadow-purple-400"
        >
            <div
                style={{ backgroundImage: `url(${urlFor(blog.BlogImage)})` }}
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
};

export default BlogCard;

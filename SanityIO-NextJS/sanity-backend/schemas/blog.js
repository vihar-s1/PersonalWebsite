// schemas/blog.js
export default {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
            }
        },
        {
            name: "author",
            type: "object",
            fields: [
                {
                    title: "Author",
                    name: "author",
                    type: "reference",
                    to: [{ type: "author" }],
                },
            ],
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                    fields: [
                        {
                            type: "text",
                            name: "alt",
                            title: "Alternative text",
                            description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                        },
                    ],
                },
            ],
        },
        {
            name: "MetaDescription",
            type: "string",
            title: "Meta Description",
        },
        {
            name: "CreatedAt",
            title: "Created At",
            type: "datetime",
            options: {
                dateFormat: "DD-MM-YYYY",
                timeFormat: "HH:mm",
                // timeStep: 15,
                calendarTodayLabel: "Today",
            },
        },
        {
            title: "Blog Image",
            name: "BlogImage",
            type: "image",
            options: {
                hotspot: true, // <-- Defaults to false
            },
            fields: [
                {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                },
            ],
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{type: "string"}]
        }
    ],
};

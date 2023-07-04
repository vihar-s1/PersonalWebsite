export default {
    name: "profile",
    type: "document",
    title: "Profile",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "about",
            type: "string",
            title: "About"
        },
        {
            name: "image",
            type: "image",
            title: "Image"
        },
        {
            name: "mail",
            type: "string",
            title: "Mail ID"
        },
        {
            name: "github",
            type: "string",
            title: "GitHub Link"
        },
        {
            name: "linkedin",
            type: "string",
            title: "LinkedIn Link"
        },
        {
            name: "whatsapp",
            type: "string",
            title: "WhatsApp Link"
        },
        {
            name: "instagram",
            type: "string",
            title: "Instagram Link"
        },
        {
            name: "mobile",
            type: "string",
            title: "Mobile"
        },
        {
            name: "address",
            type: "string",
            title: "Address"
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string"
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "string"
                        },
                    ]
                }
            ]
        },
        {
            name: "experience",
            title: "Experience",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "organization",
                            title: "Organization",
                            type: "string"
                        },
                        {
                            name: "position",
                            title: "Position",
                            type: "string"
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "string"
                        },
                        {
                            name: "startDate",
                            title: "Start Date",
                            type: "date",
                            options: { dateFormat: "MM-YYYY" }
                        },
                        {
                            name: "endDate",
                            title: "End Date",
                            type: "date",
                            options: { dateFormat: "MM-YYYY" }
                        },
                    ]
                }
            ]
        },
        {
            name: "projects",
            title: "Projects",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            title: "Title",
                            name: "title",
                            type: "string"
                        },
                        {
                            title: "Brief",
                            name: "brief",
                            type: "string"
                        },
                        {
                            name: "startDate",
                            title: "Start Date",
                            type: "date",
                            options: { dateFormat: "MM-YYYY" }
                        },
                        {
                            name: "endDate",
                            title: "End Date",
                            type: "date",
                            options: { dateFormat: "MM-YYYY" }
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image"
                        },
                        {
                            name: "projectLink",
                            title: "Project Link",
                            type: "string"
                        },
                        {
                            name: "teamSize",
                            title: "Team Size",
                            type: "number"
                        }
                    ],
                }
            ]
        },
        {
            name: "certificates",
            title: "Certificates",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            title: "Title",
                            name: "title",
                            type: "string"
                        },
                        {
                            title: "Brief",
                            name: "brief",
                            type: "string"
                        },
                        {
                            title: "Certificate",
                            name: "certificate",
                            type: "file"
                        },
                    ]
                }
            ]
        }
    ]
}
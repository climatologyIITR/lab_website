export default {
    name: "affiliation",
    type: "document",
    title: "Affiliations",
    fields: [
        {
            name: "description",
            type: "string",
            title: "Description",
        },
        {
            title: 'Site Url',
            name: 'siteUrl',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            })
        },
        {
            name: "image",
            type: "image",
            title: "Image",
        },
    ]
}
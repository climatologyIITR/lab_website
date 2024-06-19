export default {
    name: "teamAndAlumni",
    type: "document",
    title: "Team And Alumni",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
        },
        {
            title: 'Personal Details',
            name: 'details',
            type: 'object',
            fields: [
                {
                    title: "Email I'd",
                    name: 'email',
                    type: 'url',
                    validation: Rule => Rule.uri({
                        scheme: ['http', 'https', 'mailto']
                    })
                },
                {
                    title: 'LinkedIn Profile Url',
                    name: 'linkedIn',
                    type: 'url',
                    validation: Rule => Rule.uri({
                        scheme: ['http', 'https']
                    })
                },
            ]
        },
        {
            title: 'Type of role',
            name: 'type',
            type: 'string',
            options: {
                list: [
                    { title: 'Alumni', value: 'alumni' },
                    { title: 'Faculty', value: 'faculty' },
                    { title: 'Phd Scholars', value: 'phdScholars' },
                    { title: 'Post Graduates', value: 'postGraduates' },
                    { title: 'Trainee', value: 'trainee' },
                ],
            }
        },
        {
            name: "fieldOfResearch",
            type: "text",
            title: "Field of Research",
        },
        {
            name: "image",
            type: "image",
            title: "Image",
        },
    ]
}
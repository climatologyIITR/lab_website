export default {
    name: "workshops",
    type: "document",
    title: "Workshops",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title of Workshop",
        },
        {
            title: 'Details',
            name: 'details',
            type: 'object',
            fields: [
                { name: 'field', type: 'string', title: 'Field' },
                { name: 'organizers', type: 'string', title: 'Organizers' },
                { name: 'venue', type: 'string', title: 'Venue' },
                {
                    name: 'startDate',
                    title: 'Start Date',
                    type: 'date',
                    options: {
                        dateFormat: 'DD-MM-YYYY',
                        calendarTodayLabel: 'Today'
                    }
                },
            ]
        },
        {
            name: "titleImage",
            type: "image",
            title: "Title Image",
        },
        {
            name: "about",
            type: "text",
            title: "About",
        },
        {
            name: "photos",
            type: "array",
            title: "Photos",
            of: [{ type: "image" }]
        },
        {
            title: "Workshop Document",
            name: "workshopDoc",
            type: "file",
        }
    ]
}
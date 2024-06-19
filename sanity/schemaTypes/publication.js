export default {
    name: "publication",
    type: "document",
    title: "Publications",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title of Publication",
        },
        {
            title: 'Details',
            name: 'details',
            type: 'object',
            fields: [
                { name: 'field', type: 'string', title: 'Field' },
                {
                    name: 'date',
                    title: 'Date',
                    type: 'date',
                    options: {
                        dateFormat: 'DD-MM-YYYY',
                        calendarTodayLabel: 'Today'
                    }
                },
                { name: 'labMembers', type: 'array', title: 'labMembers', of: [{ type: 'string' }] },
                { name: 'otherParticipants', type: 'array', title: 'otherParticipants', of: [{ type: 'string' }] },
            ]
        },
    ]
}
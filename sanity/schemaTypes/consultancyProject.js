export default {
    name: "consultancyProject",
    type: "document",
    title: "Consultancy Projects",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title of Consultancy Project",
        },
        {
            title: 'Details',
            name: 'details',
            type: 'object',
            fields: [
                { name: 'location', type: 'string', title: 'Location' },
                {
                    name: 'startDate',
                    title: 'Start Date',
                    type: 'date',
                    options: {
                        dateFormat: 'DD-MM-YYYY',
                        calendarTodayLabel: 'Today'
                    }
                },
                { name: 'financialOutlay', type: 'number', title: 'Financial Outlay' },
                { name: 'fundingAgency', type: 'string', title: 'Funding Agency' },
                { name: 'contributors', type: 'array', title: 'Contributors', of: [{ type: 'string' }] },
            ]
        },
        {
            title: 'Status of the Project',
            name: 'status',
            type: 'string',
            options: {
                list: [
                    { title: 'Ongoing', value: 'ongoing' },
                    { title: 'Concluded', value: 'concluded' },
                    { title: 'Scholar', value: 'Scholar' },
                ],
            }
        },
        {
            name: "titleImage",
            type: "image",
            title: "Title Image",
        },
        {
            name: "description",
            type: "text",
            title: "Description",
        }
    ]
}
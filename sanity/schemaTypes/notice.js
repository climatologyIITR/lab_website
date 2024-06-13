export default {
    name: "notice",
    type: "document",
    title: "Notice",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title of Notice",
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: "description",
            type: "text",
            title: "Description",
        }
    ]
}
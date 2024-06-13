export default {
    name: "tutorial",
    type: "document",
    title: "Tutorials",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title of Tutorial",
        },
        {
            title: 'Key Concepts',
            name: 'keyConcepts',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            title: "Tutorial Document",
            name: "tutorialDoc",
            type: "file",
        }
    ]
}
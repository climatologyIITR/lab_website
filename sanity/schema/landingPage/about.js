const aboutSection={
    name: "aboutSection",
    title: "about Section",
    type: "object",
    fields: [
      {
        "name": "heading",
        "title": "Heading",
        "type": "string",
        "validation": Rule => Rule.required().max(100)
      },
      {
        "name": "paragraph",
        "title": "Paragraph Text",
        "type": "text",
        "validation": Rule => Rule.required().max(500)
      }
    ]
  }
  export default aboutSection;
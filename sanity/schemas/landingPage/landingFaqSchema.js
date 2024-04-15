const landingFaqSchema = {
  name: 'landingFaqs',
  title: 'Landing Faqs',
  type: 'document',
  fields: [
    {
      name: 'sectionTopHeading',
      title: 'Section Top Heading Name',
      type: 'string',
    },
    {
      name: 'sectionMiddleHeading',
      title: 'Section Middle Heading Name',
      type: 'string',
    },
    {
      name: 'sectionThirdHeading',
      title: 'Section Third Heading Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'sectionTopHeading' },
    },
    {
      name: 'faqs',
      title: 'Faqs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'text',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};

export default landingFaqSchema;

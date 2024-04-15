const landingTestimonialSchema = {
  name: 'landingTestimonial',
  title: 'Landing Testimonial',
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'testimonialContent',
              title: 'Testimonial Content',
              type: 'text',
            },
            {
              name: 'highlightedWord',
              title: 'Highlighted Word',
              type: 'string',
            },
            {
              name: 'personName',
              title: 'Person Name',
              type: 'string',
            },
            {
              name: 'personDesignation',
              title: 'Person Designation',
              type: 'string',
            },
            {
              name: 'personImage',
              title: 'Person Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'alt',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default landingTestimonialSchema;

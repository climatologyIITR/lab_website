const landingFeatureSchema = {
  name: 'landingFeature',
  title: 'Landing Features',
  type: 'document',
  fields: [
    {
      name: 'sectionFirstHeading',
      title: 'Section First Heading Title',
      type: 'string',
    },
    {
      name: 'sectionSecondHeading',
      title: 'Section Second Heading Title',
      type: 'string',
    },
    {
      name: 'sectionThirdHeading',
      title: 'Section Third Heading Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'sectionFirstHeading' },
    },
    {
      name: 'featuresMain',
      title: 'Features Main',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Feature Heading',
              type: 'string',
            },
            {
              name: 'headingHighlight',
              title: 'Feature Higlighted Heading',
              type: 'string',
              description: 'Enter second heading. This will be highlighted',
            },
            {
              name: 'headingColor',
              title: 'Highlighted Heading Color',
              type: 'string',
              description: 'Tailwind Css Color',
            },
            {
              name: 'featureDiscription',
              title: 'Feature Description',
              type: 'text',
            },
            {
              name: 'svgCode',
              title: 'SVG Code',
              type: 'text',
              description: 'Enter the SVG code here',
            },
          ],
        },
      ],
    },
    {
      name: 'featuresSecondary',
      title: 'Features Secondary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },

            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            {
              name: 'featureImage',
              title: 'Feature Image',
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

export default landingFeatureSchema;

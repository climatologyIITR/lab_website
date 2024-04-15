const landingMainHeadingSchema = {
  name: 'landingMainHeading',
  title: 'Landing Main Heading',
  type: 'document',
  fields: [
    {
      name: 'headingOne',
      title: 'Heading One',
      type: 'string',
    },
    {
      name: 'headingTwo',
      title: 'Heading Two',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'headingOne' },
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
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
    {
      name: 'bannerVideoUrl',
      title: 'Banner Video Url',
      type: 'url',
    },
  ],
};

export default landingMainHeadingSchema;

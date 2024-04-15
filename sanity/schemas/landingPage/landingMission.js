const landingMissionSchema = {
  name: 'landingMission',
  title: 'Landing Mission',
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
      name: 'missions',
      title: 'Missions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'missionHeading',
              title: 'Mission Heading',
              type: 'string',
            },
            {
              name: 'missionSubHeading',
              title: 'Mission Sub Heading',
              type: 'string',
            },
            {
              title: 'Highlighted Word Indices',
              name: 'highlightedWordIndices',
              type: 'array',
              of: [{ type: 'number' }],
            },
            {
              name: 'missionDescription',
              title: 'Mission Description',
              type: 'text',
            },
            // Add more fields for each mission as needed
          ],
        },
      ],
    },
  ],
};

export default landingMissionSchema;

import landingMainHeadingSchema from './landingPage/landing-main-heading';
import landingFaqSchema from './landingPage/landingFaqSchema';
import landingFeatureSchema from './landingPage/landingFeature';
import landingMissionSchema from './landingPage/landingMission';
import landingTestimonialSchema from './landingPage/landingTestimonial';
import blockContent from './blog/blogContent';
import author from './blog/author';
import post from './blog/post';
import category from './blog/category';
import tag from './blog/tag';

const schemas = [
  landingMainHeadingSchema,
  landingMissionSchema,
  landingFeatureSchema,
  landingTestimonialSchema,
  landingFaqSchema,
  blockContent,
  author,
  post,
  category,
  tag,
];

export default schemas;

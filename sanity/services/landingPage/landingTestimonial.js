import { groq } from 'next-sanity';
import sanityClient from '../../sanityClient';

export async function getLandigTestimonials() {
  try {
    return sanityClient.fetch(
      groq`*[_type == 'landingTestimonial']{
        _id,
        _createdAt,
        sectionTopHeading,
        sectionMiddleHeading,
        sectionThirdHeading,
        testimonials[]{
          testimonialContent,
          highlightedWord,
          personName,
          personDesignation,
          'personImage': personImage.asset->url  
        }
      }`,
      { next: { revalidate: 3600 } }
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}

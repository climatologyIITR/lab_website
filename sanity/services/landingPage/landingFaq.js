import { groq } from 'next-sanity';
import sanityClient from '../../sanityClient';

export async function getLandigFaqs() {
  try {
    return sanityClient.fetch(
      groq`*[_type == 'landingFaqs']{
        _id,
        _createdAt,
        sectionTopHeading,
        sectionMiddleHeading,
        sectionThirdHeading,
        faqs
      }`,
      { next: { revalidate: 3600 } }
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}

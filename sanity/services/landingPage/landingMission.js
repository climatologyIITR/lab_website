import { groq } from 'next-sanity';
import sanityClient from '../../sanityClient';

export async function getLandigMission() {
  try {
    return sanityClient.fetch(
      groq`*[_type == 'landingMission']{
                    _id,
                    _createdAt,
                    sectionTopHeading,
                    sectionMiddleHeading,
                    sectionThirdHeading,
                    missions
                }`,
      { next: { revalidate: 3600 } }
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}

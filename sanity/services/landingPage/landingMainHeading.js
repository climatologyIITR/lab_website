import { groq } from 'next-sanity';
import sanityClient from '../../sanityClient';

export async function getLandigMainHeading() {
  try {
    return sanityClient.fetch(
      groq`*[_type == 'landingMainHeading']{
                    _id,
                    _createdAt,
                    headingOne,
                    headingTwo,
                    "slug": slug.current,
                    "image": image.asset->url
                }`,
      { next: { revalidate: 3600 } }
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}

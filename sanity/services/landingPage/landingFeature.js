import { groq } from 'next-sanity';
import sanityClient from '../../sanityClient';

export async function getLandigFeatures() {
  try {
    return sanityClient.fetch(
      groq`*[_type == 'landingFeature']{
                    _id,
                    _createdAt,
                    sectionFirstHeading,
                    sectionSecondHeading,
                    sectionThirdHeading,
                    featuresMain,
                    featuresSecondary[]{
                        title,
                        content,
                        'imageUrl': featureImage.asset->url  
                      }
                }`,
      { next: { revalidate: 3600 } }
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}

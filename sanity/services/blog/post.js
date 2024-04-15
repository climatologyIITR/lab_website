import { groq } from 'next-sanity';
import sanityClient from '../../sanityClient';

export async function getPosts() {
  try {
    return sanityClient.fetch(
      groq`*[_type == 'post']{
        ..., 
        'author': author->, 
        'categories': categories[]->, 
        'tags': tags[]-> 
      } | order(_createdAt desc)`
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}

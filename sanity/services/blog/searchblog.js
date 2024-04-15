import { groq } from 'next-sanity';
import sanityClient from '../../sanityClient';

export async function getPostsBySearchTerm(searchTerm) {
  try {
    return sanityClient.fetch(
      groq`*[_type == 'post' && (
        body[].children[].text match $searchTerm ||
        description match $searchTerm ||
        categories[].title match $searchTerm
      )] {
        ..., 
        'author': author->, 
        'categories': categories[]->, 
        'tags': tags[]-> 
      } | order(_createdAt desc)`,
      { searchTerm }
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}
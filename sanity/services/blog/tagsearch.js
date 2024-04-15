import sanityClient from '../../sanityClient';
import { groq } from "next-sanity";
export async function getPostsByCategory(categoryTitle) {
  try {
    console.log(categoryTitle , typeof(categoryTitle));
    return await sanityClient.fetch(
      groq`*[_type == "post" && references(categories, *[title == $categoryTitle]._id)]{
        ..., 
        'author': author->, 
        'categories': categories[]->, 
        'tags': tags[]-> 
      } | order(_createdAt desc)`,
      { categoryTitle }
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    // throw new Error('Error fetching data');
  }
}
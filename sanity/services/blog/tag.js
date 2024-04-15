import { groq } from "next-sanity";
import sanityClient from "../../sanityClient";
export async function fetchCategory() {
  try {
    return await sanityClient.fetch(groq`*[_type == "category"]{title}`);
  } catch (error) {
    console.error("Error fetching tags:", error);
  }
}

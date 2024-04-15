import { createClient } from 'next-sanity';

const sanityClient = createClient({
  projectId: '27pvblqj',
  dataset: 'production',
  apiVersion: '2023-12-21',
  useCdn: false,
});

export default sanityClient;

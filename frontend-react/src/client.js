import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'nabr04ca', // Fallback for local dev
  dataset: 'production',
  apiVersion: '2023-10-22',
  useCdn: true, // Changed from 'true' to true
  token: process.env.REACT_APP_SANITY_TOKEN, // Use env variable
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
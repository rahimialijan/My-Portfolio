import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: 'nabr04ca',
  dataset: 'production',
  apiVersion: '2023-10-22',
  useCdn: 'true',
  token: 'sklT3OZearQ9l0bDa9JFUuAYt07encD3ZEokSi6PvNz8teGzKCy0dncGe3aisKD7FGOMVITWNt471jxTlfBC4mFynmrCcDMpbpF7Grd4UIDxk4PNfZ8JGVlu0hN3HkjPEhxMLTILi4R6oFIWVhGbXUVcUOTv1zEMOOONQ0phWFNAhzlwjtgG',
  // token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

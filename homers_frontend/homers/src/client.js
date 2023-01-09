import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'tcrtqk1u',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skQYktSo7JcJryC1yWmSlYXNUBp0YZZntxqXKczkHfi3pxrCWSGwTnizX02WtPo7KkVyrFq4pmoraidhx8UmEDi8n0Q7JCmcCRiF4hx4QOgGRDqJab8DLW8LNWJtnzmrMkbkl0QrgPyzA7fpv6KgifSXXTPntHvZZqO7THHNLRzT0FoaxGWf',
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source)

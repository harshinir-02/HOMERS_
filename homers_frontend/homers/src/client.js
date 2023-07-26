import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '32rnw5gc',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skNLVzqgG0eWn9hoyc7YVxovRqvzyRNkBxV2XOLheeqeDhoYVk0D1z2wlZy9QzjvSchNqEz9tC7rr4caEWL530oYTe8WKJLYFJ5V1nzb7BRkchprs4sc5u75MUjpdDAAuVrmZJoSeSBAXMffvTZr9D9uO3QpyrMAlbhn0TApW4myNUQqtJoR',
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source)

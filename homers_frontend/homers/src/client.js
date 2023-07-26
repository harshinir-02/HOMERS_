import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'zjz1iqyk',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skIsJIgrknMbytBUWcuxpzXdXteHXKuJiI1dUqZmYHvKMZObulQKKZCUNWPpEiWGGZLsgx6lztZ6aq5JgYHr3lJS2kemYPkwbg333ja6ssOOau4iJLJrvNEa6QxXkWTaunE2om9fwoexpTUyHyR92SnM2bTZSvqvZ4kiEnCkMWJpoLBxHsn3',
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source)

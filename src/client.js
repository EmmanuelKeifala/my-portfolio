import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '5e8eqopg',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skdKI830dn3aJcgeCIZoWMLuShHHgjlx8Va7JIgcWZSuG08mabY7GnDwiUFcLrMXAKrLHjrQwqnAsbZoEP5yUgLO5aukem0dHz9Aqdil9sckvNxu9yOMr4z1EimnfaRmwvC5WbANxCojjqOGf3fcQY07DADWugoxWtcmhkRvj6r6cqszaW7Y',
});

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);

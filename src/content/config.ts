import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
};

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema:  z.object({
    title: z.string(),
    description: z.string(),
    date: z.union([
      z.string().transform(str => new Date(str)),
      z.date()
    ]),
  }),
});

export const collections = {
  'articles': blogCollection,
};

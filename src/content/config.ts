import { defineCollection, z } from 'astro:content';

const coverImgSchema = z.object({
  url: z.string().url(),  
  alt: z.string(),   
});

const writings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    coverImg: coverImgSchema,
    tags: z.array(z.string()),
    isDraft: z.boolean()
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    repo: z.string().optional(),
    isDraft: z.boolean()
  })
})

const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    description: z.string().optional(),
    isDraft: z.boolean()
  })
})

export const collections = { writings, projects, experiences };
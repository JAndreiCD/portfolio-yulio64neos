import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedDate: z.date(),
        updatedDate: z.date().optional(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false)        
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedDate: z.date(),
        featured: z.boolean().default(false),
        technologies: z.array(z.string()).default([]),
        repositoryUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        image: z.string().optional(),
    })
});

export const collections = {
    blog,
    projects
}
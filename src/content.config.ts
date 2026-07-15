import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({
        base: './src/content/blog',
        pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    loader: glob({
        base: './src/content/projects',
        pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedDate: z.coerce.date(),
        featured: z.boolean().default(false),
        technologies: z.array(z.string()).default([]),
        repositoryUrl: z.url().optional(),
        liveUrl: z.url().optional(),
        image: z.string().optional(),
    }),
});

export const collections = {
    blog,
    projects,
};
import { defineCollection, z } from 'astro:content';

const linkSchema = z.object({
  label: z.string(),
  url: z.string().refine(
    (v) => v.startsWith('/') || /^https?:\/\//.test(v) || v.startsWith('mailto:'),
    { message: 'Must be an absolute URL, root-relative path, or mailto:' }
  ),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    domain: z.enum(['software', 'ml', 'pharma', 'cheme']),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    blurb: z.string(),
    techStack: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    links: z.array(linkSchema).default([]),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().nullable().default(null),
    current: z.boolean().default(false),
    volunteer: z.boolean().default(false),
    order: z.number(),
    bullets: z.array(z.string()),
    techStack: z.array(z.string()).default([]),
  }),
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    gpa: z.string().optional(),
    order: z.number(),
    bullets: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experience, education };

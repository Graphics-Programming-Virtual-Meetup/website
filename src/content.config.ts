import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const resources = defineCollection({
  loader: glob({ pattern: "**/*.toml", base: "./src/data/resources" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        link: z.string().url(),
        categories: z.array(z.string()),
        description: z.string(),
        image: z
          .object({
            src: image(),
            alt: z.string().optional(),
          })
          .optional(),
        formats: z.array(
          z.union([
            z.literal("assignments"),
            z.literal("article"),
            z.literal("book"),
            z.literal("course"),
            z.literal("list"),
            z.literal("paper"),
            z.literal("repository"),
            z.literal("slides"),
            z.literal("specification"),
            z.literal("tutorial"),
            z.literal("video"),
          ])
        ),
        languages: z.array(z.string()).optional(),
        other_tags: z.array(z.string()).optional(),
        paid: z.boolean().default(false),
        priority: z.number().default(0),
      })
      .transform(({ other_tags, ...rest }) => ({
        ...rest,
        otherTags: other_tags,
      })),
});

const resourceCategories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/resource_categories" }),
  schema: z.object({
    title: z.string().optional(),
    priority: z.number().default(0),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { resources, resourceCategories };

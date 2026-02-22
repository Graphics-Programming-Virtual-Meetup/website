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
            z.literal("book"),
            z.literal("paper"),
            z.literal("tutorial"),
            z.literal("video"),
            z.literal("repository"),
          ]),
        ),
        languages: z.array(z.string()).optional(),
        other_tags: z.array(z.string()).optional(),
      })
      .transform(({ other_tags, ...rest }) => ({
        ...rest,
        otherTags: other_tags,
      })),
});

const resourceCategories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/resource_categories" }),
});

export const collections = { resources, resourceCategories };

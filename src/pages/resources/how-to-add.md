---
layout: ../../layouts/MarkdownPageLayout.astro
title: How to Add a Resource
description: Guide for adding a new resource to the GPVM resources list
---

# How to Add a Resource

Resources are stored as [TOML](https://toml.io/) files in `src/data/resources/`.

## File format

Below is an example:

```toml
title = "Learn OpenGL"
link = "https://learnopengl.com/"
categories = ["Beginner Friendly", "Overview"]
description = "Learn OpenGL is the definitive resource for learning real-time renderer techniques as beginners."
formats = ["tutorial"]
languages = ["c++"]
priority = 100

[image]
src = "assets/learn_opengl.png"
alt = "a smiling textured container in OpenGL"
```

### Required fields

- `title`: Display name of the resource
- `link`: URL to the resource
- `categories`: See below for more information
- `description`: A brief description of what the resource covers
- `formats`: What kind of resource this is (e.g. article, book, course, video)

### Optional fields

- `languages`: Programming languages used (e.g. `["c++", "GLSL"]`)
- `other_tags`: Any extra tags that don't fit elsewhere. Useful if you want to add a tag to a resource, but don't want the tag to be displayed on the category sidebar.
- `paid`: Set to `true` if the resource costs money. Defaults to `false`
- `priority`: Resource with higher numbers appear earlier in listings. Defaults to `0`
- `image`: Optional thumbnail

#### Image

```toml
[image]
src = "assets/my-resource.png"
alt = "Description of the image"
```

Place the image file in `src/data/resources/assets/`. The `alt` field is optional.

## Categories

Categories will be auto-generated if at least one resources refer to it. They can also be nested, for example, `"Ray Tracing/GPU"`.

Despite being called "categories" rather than "tags", you can have more than one categories for each resource.

### Customization

By putting a corresponding file under `src/data/resource_categories/`, you can add description or customize the behavior of a category. Use the path relative to that directory as the category string, with `/` as the separator for nested categories.

Examples:

- `"Overview"` → `src/data/resource_categories/overview.md`
- `"Ray Tracing/GPU"` → `src/data/resource_categories/ray-tracing/gpu.md`

The markdown file has the following format:

```md
---
title: "category title"
priority: 100
related: ["a", "list", "of", "related", "categories"]
---

Description text
```

All the frontmatter attributes are optional.

- `title`: By default, a category uses its last component as a title. For example, "Ray Tracing/Path Tracing" will have "Path Tracing" as the title. In some cases, this doesn't work well, for example, "Ray Tracing/API" will have "API" as a title. In this case, you can provide an alternative title.
- `priority`: Categories with higher numbers appear earlier in the category sidebar. Defaults to `0`
- `related`: Related categories specified with their slugs. E.g. `"ray-tracing/api"`

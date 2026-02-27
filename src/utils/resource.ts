import type { CollectionEntry } from "astro:content";

export function sortResources(resources: CollectionEntry<"resources">[]) {
  return resources.sort((a, b) => {
    // Sort by priority. If priority is the same, sort by whether this resource is paid
    const priority_diff = b.data.priority - a.data.priority;
    if (priority_diff != 0) {
      return priority_diff;
    }

    if (a.data.paid && !b.data.paid) {
      return 1;
    } else if (!a.data.paid && b.data.paid) {
      return -1;
    } else {
      return 0;
    }
  });
}

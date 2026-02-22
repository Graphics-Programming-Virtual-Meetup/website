// Given a resource string, convert it to a slug usable inside an url.
// E.g. "Ray Tracing/Acceleration Structures" to "ray-tracing/acceleration-structures"
function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-");
}

// An abstraction over a (potentially nested) resource category
// e.g. "Ray Tracing" or "Ray Tracing/Acceleration Structures" (nested)
export class ResourceCategory {
  parts: string[];

  constructor(parts: string[]) {
    this.parts = parts;
    if (this.parts.length == 0) {
      throw Error("A category should at least have one part!");
    }
  }

  // Create a category from string
  static fromString(str: string) {
    const parts = str.split("/");
    return new ResourceCategory(parts);
  }

  // Returns the string representation of the category
  toString(): string {
    return this.parts.join("/");
  }

  // Returns the slug of the category
  // E.g. "Ray Tracing/Acceleration Structures" will have "ray-tracing/acceleration-structures"
  get slug(): string {
    return this.parts.map(slugify).join("/");
  }

  // Gets the last component of the category
  // E.g. "Ray Tracing/Acceleration Structures" will return "Acceleration Structures"
  get last(): string {
    return this.parts[this.parts.length - 1];
  }

  // Returns this category and all its ancesters
  // E.g. "Ray Tracing/Acceleration Structures" will return ["Ray Tracing", "Ray Tracing/Acceleration Structures"]
  ancestorsAndSelf(): ResourceCategory[] {
    return this.parts.map(
      (_, i) => new ResourceCategory(this.parts.slice(0, i + 1)),
    );
  }

  // Returns all ancesters
  ancestors(): ResourceCategory[] {
    return this.parts
      .slice(0, -1)
      .map((_, i) => new ResourceCategory(this.parts.slice(0, i + 1)));
  }

  get parent(): ResourceCategory | undefined {
    if (this.parts.length == 1) {
      return undefined;
    }

    return new ResourceCategory(this.parts.slice(0, -1));
  }

  // This category "belongs to" another category when they are either the same or when this category is a children of another category
  belongsTo(parent: ResourceCategory) {
    return (
      parent.parts.length <= this.parts.length &&
      parent.parts.every((v, i) => v === this.parts[i])
    );
  }
}

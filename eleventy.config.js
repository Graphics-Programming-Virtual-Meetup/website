export const config = {
  dir: {
    input: "contents",
    // includes: "_includes",
    // data: "_data",
    // output: "_site",
  },
};

export default async function (eleventyConfig) {
  // Configure Eleventy

  // Copy `css/` to `_site/css/`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("assets");
}

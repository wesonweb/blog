module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/")
  eleventyConfig.addPassthroughCopy("src/css/bundle.css")
  eleventyConfig.addWatchTarget("src/css/")
  eleventyConfig.addWatchTarget("src/favicons/")
  eleventyConfig.addFilter('cssmin', require('./src/_filters/cssmin.js'));
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}` )

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["html", "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
}

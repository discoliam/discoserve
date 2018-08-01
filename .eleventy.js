module.exports = function(eleventyConfig) {
  // Add File List
  // config.addShortcode("fileList", require("./functions/filelist.js"));
  eleventyConfig.addLiquidShortcode(
    "fileList",
    require("./functions/filelist.js")
  );

  return {
    dir: {
      input: "src/site",
      output: "build",
      includes: "_includes"
    },
    templateFormats: ["liquid", "md"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};

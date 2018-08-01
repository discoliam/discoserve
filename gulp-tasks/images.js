var project = require("./_project.js");
var gulp = require("gulp");

// Copy files to build folder
gulp.task("images", function() {
  return gulp
    .src(project.buildSrc + "/images/*/*")
    .pipe(gulp.dest(project.buildDest + "/images"));
});

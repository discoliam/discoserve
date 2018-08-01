var project = require("./_project.js");
var gulp = require("gulp");

// Copy files to build folder
gulp.task("files", function() {
  return gulp
    .src(project.buildSrc + "/files/*")
    .pipe(gulp.dest(project.buildDest + "/files"));
});

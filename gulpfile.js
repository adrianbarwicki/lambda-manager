'use strict';
const gulp = require('gulp');
const zip = require('gulp-zip');
const foreach = require("gulp-foreach");

gulp.task('build', () =>
    gulp.src('./lambdas-src/*')
        .pipe(foreach((stream, file) => {
          const fileName = file.path.substr(file.path.lastIndexOf("/") + 1);

          gulp.src(`./lambdas-src/${fileName}/**/*`)
            .pipe(zip(`${fileName}.zip`))
            .pipe(gulp.dest("./lambdas-build"));

          return stream;
       })));

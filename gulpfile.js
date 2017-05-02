'use strict';
const gulp = require('gulp');
const zip = require('gulp-zip');
const foreach = require("gulp-foreach");
const spawn = require('child_process').spawn;
const S3CONFIG = require('./s3-config.json')

gulp.task('build', () =>
    gulp.src('./lambdas-src/*')
        .pipe(foreach((stream, file) => {
          const fileName = file.path.substr(file.path.lastIndexOf("/") + 1);

          gulp.src(`./lambdas-src/${fileName}/**/*`)
            .pipe(zip(`${fileName}.zip`))
            .pipe(gulp.dest("./lambdas-build"));

          return stream;
       })));

gulp.task('deploy', [ 'build' ], () => {
    const args = [ './**', '--region', S3CONFIG.REGION, '--bucket', S3CONFIG.BUCKET_NAME, '--gzip' ];
    const npm = spawn("s3-deploy", args, { 
        cwd: './lambdas-build'
    });

    npm.stdout.on('data', data => {
        console.log(`stdout: ${data}`);
    });

    npm.stderr.on('data', data => {
        console.log(`stderr: ${data}`);
    });

    npm.on('close', code => {
        console.log(code !== 0 ? 'error in build' : 0);
    });
});
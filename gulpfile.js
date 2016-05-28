'use strict'
const gulp = require('gulp')
const ts = require('gulp-typescript')
const rename = require('gulp-rename')
const merge = require('merge-stream')

const dist = 'dist'

const toCopy = ['package.json', 'config/**/*.json']

gulp.task('copy', () => {
  var tasks = toCopy.map(element => {
    return gulp.src(element, {base: './'})
      // ... other steps ...
      .pipe(gulp.dest(dist));
  });

  return merge(tasks);
})

gulp.task('compileServer', () => {
    // Using my existing tsconfig.json file
    const tsProject = ts.createProject('./tsconfig.server.json');

    // The `base` part is needed so
    //  that `dest()` doesnt map folders correctly after rename
    return gulp.src(['!node_modules', '!node_modules/**/*', '!src', '!src/**/*', '!typings', '!typings/**/*', '**/*.ts'], { base: './' })
        .pipe(ts(tsProject))
        .pipe(rename(path => {
            path.extname = '.js'
        }))
        .pipe(gulp.dest(dist))
});


gulp.task('compileClient', () => {
  // Using my existing tsconfig.json file
  const tsProject = ts.createProject('./tsconfig.json');

  // The `base` part is needed so
  //  that `dest()` doesnt map folders correctly after rename
  return gulp.src('src/**/*.ts', { base: './' })
    .pipe(ts(tsProject))
    .pipe(rename(path => {
      path.extname = '.js'
    }))
    .pipe(gulp.dest(dist))
});

gulp.task('default', ['compileServer', 'compileClient', 'copy'])

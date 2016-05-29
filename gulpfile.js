'use strict'
const gulp = require('gulp')
const path = require('path')
const ts = require('gulp-typescript')
const del = require('del')
const rename = require('gulp-rename')
const merge = require('merge-stream')

const dist = 'dist'

const toCopy = ['package.json', 'config/**/*.json']

gulp.task('copyServer', () => {
  var tasks = toCopy.map(element => {
    return gulp.src(element, {base: './'})
      // ... other steps ...
      .pipe(gulp.dest(dist));
  });

  return merge(tasks);
})

gulp.task('copyClient', () => {
  del.sync(path.join(dist, 'src', 'node_modules'));
  gulp.src([
      'node_modules/rxjs/**/*',
      'node_modules/zone.js/**/*',
      'node_modules/core-js/**/*',
      'node_modules/reflect-metadata/**/*',
      'node_modules/systemjs/**/*',
      'node_modules/@angular/**/*',
      'node_modules/angular2-universal/**/*',
      'node_modules/angular2-universal-polyfills/**/*'
    ], { base: './' })
    .pipe(gulp.dest(path.join(dist, 'src')))
  gulp.src([
  'src/index.html',
    'src/*.png'
    ], { base: './' })
    .pipe(gulp.dest(path.join(dist)))

  return gulp.src([
      'node_modules/zone.js/dist/zone.min.js',
      'node_modules/es6-promise/dist/es6-promise.min.js',
      'node_modules/core-js/client/shim.min.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/reflect-metadata/Reflect.js',
      'src/system.config.js'
    ])
    .pipe(gulp.dest(path.join(dist, 'src', 'lib')))
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

gulp.task('default', ['compileServer', 'compileClient', 'copyServer', 'copyClient'])

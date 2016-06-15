/**
 * @module server
 *
 * Start up the Trails Application.
 */

'use strict'

const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const path = require('path');
const dest = './dist';


gulp.task('clean', (cb) => {
  return gulp.src(dest).pipe(rimraf())
});

gulp.task('prerun', ['clean'], () => {
  return gulp.src([
    'node_modules/rxjs/**/*',
    'node_modules/zone.js/**/*',
    'node_modules/core-js/**/*',
    'node_modules/reflect-metadata/**/*',
    'node_modules/systemjs/**/*',
    'node_modules/@angular/**/*',
    'node_modules/angular2-universal/**/*',
    'node_modules/angular2-universal-polyfills/**/*',
    'node_modules/angular2-express-engine/**/*',
    'node_modules/angular2-hapi-engine/**/*'
  ], { base: './' })
    .pipe(gulp.dest(path.join(dest, 'src')))
});


gulp.start('prerun', run)

function run() {
  require('./dist//src/node_modules/angular2-universal/polyfills')
  const app = require('./')
  const TrailsApp = require('trails')
  const server = new TrailsApp(app)

  server.start().catch(err => server.stop(err))
}
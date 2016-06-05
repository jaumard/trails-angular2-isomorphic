const gulp = require('gulp')
const watch = require('gulp-watch')
const rename = require('gulp-rename')
const ts = require('gulp-typescript')
const del = require('del')
const path = require('path')

const dest = './dist'

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['clean', 'compile', 'copy'],
    production: ['clean', 'compile', 'copy'],
    clean: (done) => {
      del.sync([dest])
      done()
    },
    compile: () => {
      const tsProject = ts.createProject('./src/tsconfig.json');

      // The `base` part is needed so
      //  that `dest()` doesnt map folders correctly after rename
      return gulp.src(['src/**/*.ts'], { base: './' })
        .pipe(ts(tsProject))
        .pipe(rename(path => {
          path.extname = '.js'
        }))
        .pipe(gulp.dest(dest))
    },
    copy: () =>{
      gulp.src([
          'src/todo/css/*'
        ], { base: './' })
        .pipe(gulp.dest(dest))
      return gulp.src([
          'node_modules/rxjs/**/*',
          'node_modules/zone.js/**/*',
          'node_modules/core-js/**/*',
          'node_modules/reflect-metadata/**/*',
          'node_modules/systemjs/**/*',
          'node_modules/@angular/**/*',
          'node_modules/angular2-universal/**/*',
          'node_modules/angular2-universal-polyfills/**/*'
        ], { base: './' })
        .pipe(gulp.dest(path.join(dest, 'src')))

    }
  }

}

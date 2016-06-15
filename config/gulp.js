const gulp = require('gulp')
const rename = require('gulp-rename')
const ts = require('gulp-typescript')
const path = require('path')

const dest = './dist'

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compile', 'copy'],
    production: ['compile', 'copy'],
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
      return gulp.src([
          'src/todo/css/*'
        ], { base: './' })
        .pipe(gulp.dest(dest));
    }
  }

}

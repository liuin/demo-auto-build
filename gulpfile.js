var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');
var shortcss = require('postcss-short');
var precss = require("precss");

var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');



gulp.task('typeccript', function () {
  return tsProject.src()
    // 注意顺序
    // .pipe(sourcemaps.init())
    .pipe(tsProject())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('js'));
});

gulp.task('css', function () {
  var plugins = [
    shortcss,
    precss,
    // cssnext
    autoprefixer({
      // browsers: ['> 1%', 'ie >= 7'],
      browsers: ['last 3 versions'],
      cascade: false
    })
  ];
  return gulp.src('./src/css/css.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./css/'));
});


gulp.task('watch', function () {
  gulp.watch('src/js/*.ts', ['typeccript'])
  gulp.watch('src/css/*.css', ['css'])

  // gulp.watch('resource/img/**/*.{png,jpg,gif}', ['images']);
});
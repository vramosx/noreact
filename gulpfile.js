const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

gulp.task('bundle_jsx', () => {
    return gulp.src(['./src/app/**/**.jsx', './src/app/**/**/**.jsx', './src/lib.render.jsx'])
        .pipe(concat('app_bundle.jsx'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('bundle_css', () => {
    return gulp.src(['./src/app/**/**.css', './src/app/**/**/**.css'])
        .pipe(concat('build.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist'))
});

gulp.task('build', () => {
    return gulp.src(['./dist/app_bundle.js'])
        .pipe(uglify())
        .pipe(rename('build.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('bundle_project', gulp.series('bundle_jsx', 'bundle_css'));
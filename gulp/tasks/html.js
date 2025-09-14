import gulp from 'gulp';
import replace from 'gulp-replace';
import { path } from '../config/path.js';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import gulpPug from 'gulp-pug';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';

const isBuild = process.argv.includes('--build');

export const html = () => {
  return gulp
    .src(path.src.html)
    .pipe(
      gulpPug({
        pretty: true,
        verbose: true,
      })
    )
    .pipe(replace(/@img\//g, '../../img/'))
    .pipe(gulpIf(isBuild, webpHtmlNosvg()))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
};

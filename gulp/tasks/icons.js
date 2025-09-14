import gulp from 'gulp';
import { path } from '../config/path.js';
import svgSprite from 'gulp-svg-sprite';
import browserSync from 'browser-sync';

export const icons = () => {
  return gulp
    .src(path.src.icons)
    .pipe(svgSprite({ mode: { stack: { sprite: '../icons.pug', example: true } } }))
    .pipe(gulp.dest(path.build.icons))
    .pipe(browserSync.stream());
};

import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import { path } from '../config/path.js';

export const woff = () =>
  gulp.src(path.src.fonts, { encoding: false }).pipe(ttf2woff()).pipe(gulp.dest(path.build.fonts));

export const woff2 = () => gulp.src(path.src.fonts).pipe(ttf2woff2()).pipe(gulp.dest(path.build.fonts));

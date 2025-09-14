import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import { path } from '../config/path.js';

const isBuild = process.argv.includes('--build');

export const woff = () =>
  gulp.src(path.src.fonts, { encoding: false }).pipe(ttf2woff()).pipe(gulp.dest(path.build.fonts));

export const woff2 = () => {
  const config = isBuild ? { encoding: false } : {};
  return gulp.src(path.src.fonts, config).pipe(ttf2woff2()).pipe(gulp.dest(path.build.fonts));
};

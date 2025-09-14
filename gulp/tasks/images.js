import gulp from 'gulp';
import { path } from '../config/path.js';
import browserSync from 'browser-sync';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import gulpIf from 'gulp-if';

const isBuild = process.argv.includes('--build');

export const images = () => {
  return gulp
    .src(path.src.images, { encoding: false })
    .pipe(newer(path.build.images))
    .pipe(gulpIf(isBuild, webp()))
    .pipe(gulpIf(isBuild, gulp.dest(path.build.images)))
    .pipe(gulpIf(isBuild, gulp.src(path.src.images, { encoding: false })))
    .pipe(gulpIf(isBuild, newer(path.build.images)))
    .pipe(
      gulpIf(
        isBuild,
        imagemin({ progressive: true, svgoPlugins: [{ removeViewbox: false }], interlaced: true, optimizationLevel: 3 })
      )
    )
    .pipe(gulp.dest(path.build.images))
    .pipe(gulp.src(path.src.svg))
    .pipe(gulp.dest(path.build.images))
    .pipe(browserSync.stream());
};

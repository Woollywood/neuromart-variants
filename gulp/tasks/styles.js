import gulp from 'gulp';
import replace from 'gulp-replace';
import { path } from '../config/path.js';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import gulpIf from 'gulp-if';

const isBuild = process.argv.includes('--build');

const sass = gulpSass(dartSass);

export const styles = () => {
  return gulp
    .src(path.src.styles)
    .pipe(replace(/@img\//g, '../img/'))
    .pipe(sass())
    .pipe(gulpIf(isBuild, groupCssMediaQueries()))
    .pipe(gulpIf(isBuild, autoPrefixer({ grid: true, overrideBrowserslist: ['last 3 versions'], cascade: true })))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest(path.build.styles))
    .pipe(browserSync.stream());
};

import gulp from 'gulp';
import { path } from '../config/path.js';

export const scripts = () => {
  return gulp.src(path.src.scripts).pipe(gulp.dest(path.build.scripts));
};

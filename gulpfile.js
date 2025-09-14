import gulp from 'gulp';
import { path } from './gulp/config/path.js';

import { clean } from './gulp/tasks/clean.js';
import { scripts } from './gulp/tasks/scripts.js';
import { html } from './gulp/tasks/html.js';
import { styles } from './gulp/tasks/styles.js';
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';
import { woff, woff2 } from './gulp/tasks/fonts.js';
import { icons } from './gulp/tasks/icons.js';

const fontTasks = gulp.parallel(woff, woff2);
const mainTasks = gulp.parallel(scripts, html, styles, images, icons);

const watcher = () => {
  gulp.watch(path.watch.scripts, scripts);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.styles, styles);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.icons, icons);
};

const devTasks = gulp.series(clean, fontTasks, mainTasks, gulp.parallel(watcher, server));
const buildTasks = gulp.series(clean, fontTasks, mainTasks);

gulp.task('default', devTasks);
gulp.task('build', buildTasks);

const fonts = fontTasks;

export { icons, fonts };

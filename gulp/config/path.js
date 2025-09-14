import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${buildFolder}`,
    images: `${buildFolder}/img`,
    icons: `${buildFolder}/icons`,
    styles: `${buildFolder}/styles`,
    scripts: `${buildFolder}/scripts`,
    fonts: `${buildFolder}/fonts`,
    icons: `${srcFolder}/components/sprites`,
  },
  src: {
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    styles: `${srcFolder}/styles/**/*.scss`,
    html: `${srcFolder}/**/*.pug`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    fonts: `${srcFolder}/fonts/*.ttf`,
    icons: `${srcFolder}/icons/*.svg`,
  },
  watch: {
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    styles: `${srcFolder}/styles/**/*.scss`,
    html: `${srcFolder}/**/*.pug`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    icons: `${srcFolder}/icons/*.svg`,
    fonts: `${srcFolder}/fonts/*.ttf`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};

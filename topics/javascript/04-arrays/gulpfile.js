const gulp = require('gulp');
const gulpConf = require('../gulp-utils.js');

const lessons = [
  '01-arrays',
  '02-array-proto',
  '03-filter-map-sort-reduce',
];

gulpConf(gulp, '04-arrays', lessons);

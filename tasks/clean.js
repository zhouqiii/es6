//清空不必要的文件任务脚本

import gulp from 'gulp';
import args from './util/args';
import del from 'del';

gulp.task('clean',()=>{
 return del(['server/public','server/views']);
})
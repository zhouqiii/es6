
//处理css构建脚本

import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp-if 判断
import livereload from 'gulp-livereload';// 热更新,自动刷新
import args from './util/args';// 命令行参数解析

gulp.task('css',()=>{
    return gulp.src(['app/**/*.css'])//打开app目录下面的所有css文件
    .pipe(gulp.dest('server/public'))
    // .pipe(gulpif(args.watch,livereload()))  css不需要热更新
})
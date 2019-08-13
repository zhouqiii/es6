//让所有的任务关联起来按顺序执行的任务脚本
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'//处理执行顺序的包

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']));//server服务器端一定是最后启动
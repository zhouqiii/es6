//浏览器监听变化，处理连接关系任务脚本

import gulp from 'gulp';
import gulpif from 'gulp-if';
import args from './util/args';
import gutil from 'gulp-util';

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts']);//监听app下的js文件，如果发生了改变，调用script文件,script文件已经定义了将改变写入server文件，这就实现了联结
    gulp.watch('app/**/*.ejs',['pages']);//相同的监听ejs
    gulp.watch('app/**/*.css',['css']);//相同的监听css
});



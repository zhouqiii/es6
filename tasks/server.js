//服务器任务脚本

import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'//能够启动脚本作为服务器
import args from './util/args';

gulp.task('server',(cb)=>{
    if(!args.watch) return cb();
    
    var server=liveserver.new(['--harmony','server/bin/www']);//新建一个服务器server，--harmony参数表示在当前目录下执行server/bin/www脚本
    server.start();//启动服务器

    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);//监听server/public下的js前端文件和server/views下的ejs前端文件，浏览器将改变的文件通知server服务器做相应的处理
    })

    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()//监听路由和入口文件，当api接口或者路由等变化时，通知server服务器重启
    });
})
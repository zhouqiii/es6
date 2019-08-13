//处理js任务脚本

import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp-if 判断
import concat from 'gulp-concat';// gulp 文件拼接
import webpack from 'webpack';//打包
import gulpWebpack from 'webpack-stream';//gulp基于stream
import named from 'vinyl-named';// 文件重命名标志
import livereload from 'gulp-livereload';// 热更新,自动刷新
import plumber from 'gulp-plumber';// 处理文件信息流
import rename from 'gulp-rename';// 文件重命名
import uglify from 'gulp-uglify';// js,css 压缩
import {log, colors} from 'gulp-util';// 命令行输出，log 和 color 的输出
import args from './util/args';// 命令行参数解析

gulp.task('scripts',()=>{  //创建一个名为script的gulp脚本.gulp.task是gulp提供的api
    return gulp.src(['app/js/index.js'])//打开项目文件
    .pipe(plumber({  //处理文件流中抛出的异常
        errorHandler: function(){

        }
    }))
    .pipe(named())
    .pipe(gulpWebpack({//开始对js进行编译，进入webpack功能
        module: {
            rules:[{
                test:/\.js$/,
                loader:'babel-loader'//用babel处理loader即用babel处理js
            }]
        }
    }),null,(err,stats)=>{//在处理js是对错误的处理
        log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
            chunks: false
        }))
    })
    //编译完以后的处理
    .pipe(gulp.dest('server/public/js'))//gulp.dest相当于拷贝作用，编译完后放置在server/public/js
    .pipe(rename({
        basename:'cp',
        extname:'.min.js'
    }))
    .pipe(uglify({
        compress:{properties:false},
        output:{'quote_keys':true}
    }))//压缩
    .pipe(gulp.dest('server/public/js'))//压缩完后的文件以cp.min.js的名字在放置在server/public/js位置
    .pipe(gulpif(args.watch,livereload()))//热更新，用gulpif判断有watch参数的话，进行livereload()刷新
})


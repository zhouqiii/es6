import yargs from 'yargs';//是一个gulp插件，用来自定义命令行,处理命令行参数,进行解析

const args = yargs//命令行参数处理

.option('production',{// 区分开发环境和正式环境
    boolean: true,
    default: false,
    description: 'min all script'
})

 .option('watch',{// 监听开发环境中的文件
    boolean: true,
    default: false,
    description: 'watch all files'
 })

 .option('verbose',{
    boolean: true,
    default: false,
    description: 'log'
 })

 .option('sourcemaps',{
    description: 'force the creation sourcemaps'//资源映射,强制生成sourcemaps
 })

 .option('port',{//服务器端口
     string: true,
     default: 8080,
     description: 'server port'
 })

 .argv   // 命令行以字符串进行解析


 export default args;
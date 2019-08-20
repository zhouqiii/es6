//模块化
//基本概念
//Es6的模块化语法 import引入 export导出

//导出变量
// export let A=123;
// //导出函数
// export function test(){
//     console.log('hello es6');
// }
// //导出类
// export class Hello{
//     test(){
//         console.log('hello es6');
//     }
// }

//3-常用模块化导出方式
    let A=123;
    let test=function(){
        console.log('hello es6');
    };
    class  Hello{
            test(){
                console.log('hello es6');
            }
        }
    export default{
        A,
        test,
        Hello
    }

import { resolve } from "path";
import { rejects } from "assert";

//Genertor

//基本概念-异步编程的解决方式(相对Promise更加高级)，generator就是一个生成器函数
//generator的基本定义
{
    let tell=function* (){//generator定义函数function* 然后函数体有yield
        yield 'a';//yield关键字使生成器函数执行暂停，yield后面的表达式的值返回给生成器的调用对象，是针对与生成器函数的return，配合generator生成器函数，和next()使用，返回值是一个IteratorResult值对象，包括value和down两个属性
        yield 'b';
        return 'c'
    }
    let k=tell();
    console.log(k.next());//{value: "a", done: false}
    console.log(k.next());//{value: "b", done: false}
    console.log(k.next());//{value: "c", done: true}
    console.log(k.next());//{value: undefined, done: true}可以看出来next()能识别顺序，所以按照这原理实现异步
}

{
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    }
    for (let value of obj){
         console.log('value',value);//value 1 value 2 value 3
    }
}
//generator适用场景-状态机
{
    let i=1;
    let state=function* (){
        while(i){
            yield 'A';
            yield 'B';
            yield 'C'
        }
    }
    let status=state();
    console.log(status.next());//{value: "A", done: false}循环
    console.log(status.next());//{value: "B", done: false}
    console.log(status.next());//{value: "C", done: false}
    console.log(status.next());//{value: "A", done: false}
    console.log(status.next());//{value: "B", done: false}
}
//generator的async写法与yield结果是一样的
// {
//     let i=1;
//     let state=async function (){
//         while(i){
//             await 'A';
//             await 'B';
//             await 'C'
//         }
//     }
//     let status=state();
//     console.log(status.next());//{value: "A", done: false}循环
//     console.log(status.next());//{value: "B", done: false}
//     console.log(status.next());//{value: "C", done: false}
//     console.log(status.next());//{value: "A", done: false}
//     console.log(status.next());//{value: "B", done: false}
// }

//generator实用场景-抽奖次数限制
{
    let change=function(count){
        //抽奖逻辑
        console.log(`剩余${count}次`)
    }
    
    let start=function* (count){
        while(count>0){
            count--;
            yield change(count);
        }
    }
    let star=start(5);
    let btn=document.createElement('button');
    btn.id='start';
    btn.textContent='抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function(){
        star.next();
    },false)
}
//generator实用场景-状态长轮询-及时追踪服务端变化来更新前端状态
{
    let ajax=function* (){
        yield new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve({code:0});//这部分是访问后台模拟，code:0模拟取到想从后台返回的数据
            },200)
        })
    }

    let pull=function(){
        let generator=ajax();
        let search=generator.next();
        search.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                    console.log('await')
                    pull();
                },1000)
            }else{
                console.log(d.code);
            }
        })
    }
    pull();//0
}
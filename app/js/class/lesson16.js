//Iterator 和for...of循环

//什么是Iterator接口-就是针对不同的数据集合的读取，如数组，对象，map等不同的数据结构形成的数据集合，能得到统一的读取方式
//es6中有三类结构生来就具有Iterator接口：数组、类数组对象、Map和Set结构
{
    let arrar=['hello',18,'age'];
    let map=arrar[Symbol.iterator]();//es6定义好的Iterator接口
    console.log(map.next());//{value: "hello", done: false}iterator接口使用时一定有那next方法才可以返回,而且next()能有顺序
    console.log(map.next());//{value: 18, done: false}
    console.log(map.next());//{value: "age", done: false}
}
//对于一些没有Iterator接口的数据，可以按照Iterator使用规则自定义
{
    let obj={
        start:[2,5,7],
        end:['a','v','l'],
        [Symbol.iterator](){//自定义一个iterator接口
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);//函数体
            return{//iterator必须返回return next()函数
                next(){
                    if(index<arr.length){
                        return {
                            value:arr[index++],//next()函数返回return包括value和done两个属性值
                            done:false
                        }
                    }else{
                        return{
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key)// 2 5 7 a v 1 
    }
}
//Iterator基本用法
//for...of不同的数据结构，通过for...of达到统一的读取，但背后的Iterator接口不同
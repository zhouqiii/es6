//模板字符串
//标签模板
var x = 'hello'
var y = 'Anita'
function message(iterator, ...values) {
    console.log(iterator)//['',',i am','']
    console.log(values)//['hello','Anita']
}
var getMessage = message`${x},i am ${y}`
// 1
// function test(){
//     for(var i=1;i<3;i++){var的输出结果为1 2 3
//         console.log(i)
//     }
//     console.log(i)
// }
// test();
// 2
// function test(){
//     for(let i=1;i<3;i++){//let输出1 2 报错，let在作用域内有效，块作用域就是大括号包裹的部分，所以下面的console.log在i大括号块作用域外，失效，没有i报错
//         console.log(i)
//     }
//     console.log(i)//报错而不是i=undefine的原因是es6强制使用严格模式，未定义就引用会报错
// }
// test();
//3
function test(){
    let a=1;
   // let a=2;会报错，在块作用域内，let不能被重复定义会报错
}
test();
//4
function test2(){
    const PI=3.1415926;//1-const用来定义一个常量,也就是说不能被修改2-const定义的常量必须赋值，否则报错，编译不通过
    //PI=2;会报错，“read-only”，并且const也有块作用域，
    const k={
        a:1
    }
    k.b=3;//const定义对象，对象的实质是指针指向，可以修改指针的指向，但不能修改变量
    // console.log(PI,k)
}

test2();
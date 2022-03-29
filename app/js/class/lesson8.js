//函数扩展-新增特性

//参数默认值，有默认值的参数后面不能在放没有默认值的变量，比如y后面放z变量但不设置默认值是会报undefined
{
    function test(x='Json',y='Alice',c){
        console.log(x,y);
    }
    test();//Json Alice
    test('hello');// hello Alice
    test('hello','wrold');//hello wrold
} 

//作用域
{
   
    let x='data1';
    function test(x,y=x){
        console.log(x,y);
    }
    test('kill');//kill kill
}
{
   
    let x='data1';
    function test(c,y=x){
        console.log(c,y);
    }
    test('kill');//kill data1
}

//rest参数,...参数写成数组
{
    function test(...arg){
       for(let v of arg){
           console.log(v);
       }
    }
    test([1,2,3,4,'a']);//[1,2,3,4,"a"]
}

//扩展运算符...将数组写成一个个字符
{
    console.log(...[1,2,3,4,'a']);//1 2 3 4 "a"
}

//箭头函数
{
    let arr=function(v){
        return v*3;
    }
    console.log(arr(3))//9

    let arrr = v => v*3;//函数名 函数参数(没有参数就是用()代替) 函数返回值
    console.log(arrr(3));//9 v=>v*3与function(v){return v*3}相同
}

//尾调用
{
    function test(x){
        console.log('x',x)
    }

    function fx(x){
        return test(x);//尾调用，在fx()函数的最后一步调用了test函数，在一些嵌套调用的时候尾调用会优化很多性能
    }

    fx(123);
}
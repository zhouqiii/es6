//解构赋值

{
    let a,b,rest;
    [a,b]=[1,2];//数组解构赋值1
    console.log(a,b);
}
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);//1 2 [3,4,5,6]数组解构赋值2
}
{
    let a,b;
    ({a,b}={a:3,b:4});//对象解构赋值
    console.log(a,b);
}
{
    let a,b,c;
    [a,b,c=3]=[1,2,4];//1 2 4 设置c=3相当于设置默认值，防止解构赋值配对错误，数组解构赋值3
    //[a,b,c]=[1,2];//如果没有给解构赋值成功配对，c=undefined,数组解构赋值4

    console.log(a,b,c);
}
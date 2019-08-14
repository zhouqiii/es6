//解构赋值用法

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
    ({a,b}={a:3,b:4});//对象解构赋值1
    console.log(a,b);
}
{
    let o={p:33,q:true};
    let {p,q}=o;//对象解构赋值的左右两侧都必须是对象，按照key与value来一一对应
    console.log(p,q);
}
//解构赋值默认参数
{
    let a,b,c;
    [a,b,c=3]=[1,2,4];//1 2 4 设置c=3相当于设置默认值，防止解构赋值配对错误，数组解构赋值3
    //[a,b,c]=[1,2];//数组解构赋值必须一一配对，如果没有给解构赋值成功配对，c=undefined,数组解构赋值4
    console.log(a,b,c);
}

{
    let {a=3,b=5}={a:10};
    console.log(a,b);
}

//解构赋值的应用场所
{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);//1-变量的赋值交换（省去了以往的中间赋值）
}
{
    function f(){
        return[1,2];
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);//2-调用函数赋值
}
{
    function f(){
        return[1,2,3,4,5,6];
    }
    let a,b,c;
    [a,b,...c]=f();
    console.log(a,b,c);//1 2 [3,4,5,6]
}
{
    function f(){
        return[1,2,3,4,5,6];
    }
    let a,b,c;
    [a,b,c]=f();
    console.log(a,b,c);//1 2 3
}
{
    function f(){
        return[1,2,3,4,5,6];
    }
    let a,b,c;
    [a,b,,,c]=f();
    console.log(a,b,c);//1 2 5
}

{
    let metadata={
        title:'firsttitle',
        content:[{
            title:'secondtitle',
            desc:'description',
        }]
    };
    let {title:firtitle,content:[{title:sectitle}]}=metadata;//注意用法的对应
    console.log(firtitle,sectitle);//对象解构赋值-数组嵌套取值
}
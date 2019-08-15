//数组扩展新特性-新增的api方法

//Array.of
{
   let arr=Array.of(1,2,3,4) ;
   console.log('arr=',arr);

   let empty=Array.of();
   console.log('empty=',empty);
   
   let another=Array.of('a',{b:2,c:3},5,6);//["a",{b:2,c:3},5,6]
   console.log('another=',another);
}

//Array.from-1可以将伪数组比如集合等转化成数组，从而使用一些数组的特性2-类似于map，有映射的作用
{
    let p=document.querySelectorAll('p');
    let pArr=Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent);
    })//vue es6 js-strong 混合实战开发
    console.log(Array.from([1,2,3],function(item){return item*2}))//2 4 6
}

//fill替换数组元素
{
    console.log('fill-1',[1,2,3,4].fill(6));//全换成6
    console.log('fill-2',[1,2,3,'a',NaN,undefined].fill(6,3,6));//target start end(前一)从index=3开始，换到index=6停止，不包括index=6
}

//.keys()、.values()、.entries()-依赖于polyfill库，否则浏览器不支持此api
{
    for(let index of [1,'1','a',NaN].keys()){
        console.log('index=',index);//0 1 2 3 返回数组的索引
    }

    for(let value of [1,'1','a',NaN].values()){
        console.log('value=',value);// 1 1 a NaN返回数组的值 当用到values时换成用entries，values兼容不好
    }

    for(let [index,value] of [1,'1','a',NaN].entries()){
        console.log('(index,value)=',index,value);// 返回数组的索引和值，有顺序
    }
}

//copyWithin
{
    console.log([4,5,2,6,9].copyWithin(0,1,2));//target start end(前一)5 5 2 6 9
    console.log([4,5,2,6,9].copyWithin(2,0,2));//4 5 4 5 9
}

//.find()、.findIndex()、.includs()(新增了对NaN的支持)
{
    console.log('find返回值',[1,2,3,4,5,'a',NaN].find(function(item){return item=NaN}));//undefind
    console.log('find返回值',[1,2,3,4,5,'a',NaN].find(function(item){return item>3}));//4
    console.log('findIndex返回index',[1,2,3,4,5,'a',NaN].findIndex(function(item){return item>3}));//3
    console.log('iincludes返回boolean,并且能对NaN识别',[1,2,3,4,5,'a',NaN].includes(4));//true
    console.log('iincludes返回boolean,并且能对NaN识别',[1,2,3,4,5,'a',NaN].includes(NaN));//true
}
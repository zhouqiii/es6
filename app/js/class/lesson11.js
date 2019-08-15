//数据结构 

//Set-会保证没有重复的key，应用于去重，它的方法 .add() .size() .delete() .clear() .has()，但它不会进行字符串的转换 
{
    let arr=new Set();
    arr.add(1);
    arr.add(2);
    arr.add(1);
    arr.add('2');
    console.log(arr,arr.size);//{1,2,'2'} 3
//所有的遍历方法基本都可以使用
    for(let p of arr.keys()){
        console.log(p);//1 2 2
    }
    for(let q of arr.values()){
        console.log(q);//1 2 2
    }
    for(let [key,value] of arr.entries()){
        console.log(key,value);//1 1   2 2     2 2
    }
    arr.forEach(function(item){
        console.log(item);//1 2 2
    })

    let arr1=[1,2,3,4,2,3];
    let arr2=new Set(arr1);
    console.log(arr2);//[1,2,3,4]

    let arr3=[1,2,3,4,2,'3'];
    let arr4=new Set(arr3);
    console.log(arr4);//[1,2,3,4,'3']

    arr4.delete(2)
    console.log(arr4)//[1,3,4,'3']

    console.log(arr4.has(1));//true

    arr4.clear()
    console.log(arr4)//{}清空

}
//WeakSet的用法-与Set区别：1.没有size和clear方法，其他方法一样 2.数据类型只能对象 3.不能遍历 4.弱引用

//Map的用法，它的方法  .size() .delete() .clear() 与Set一样，添加是.set（）,遍历方法api与Set也相同，基本遍历方法都可以使用

{   
    let arr=['a','v'];
    let map=new Map();
    map.set(arr,3);//.set的两个参数 必须前面是key 后面是value
    console.log(map,map.get(arr))//{Array(2) => 3} 3
}

{
    let map=new Map([['a',1],['b',2]]);//必须是key value的对应数组
    console.log(map)
}
//WeakMap的用法与Map用法的区别和Set与WeakSet的区别是一样的

//Set和Map分别与Array的对比--数据结构的横向对比 增 删 改 查
//Map和Array
{
//增
    let map=new Map();
    let arr=new Array();
    map.set('a',2);
    arr.push({'a':2});
    console.log(map,arr);
//改
    map.set('a',6);
    arr.forEach(item=>item.a?item.a=6:'')
    console.log(map,arr);
//查
   let maphas= map.has('a',6);
    let arrhas=arr.find(item=>item.a)
    console.log(maphas,arrhas);//true {'a':6}
//删
    map.delete('a',6)
    let index=arr.findIndex(item=>item.a);
    arr.splice(index,1);
    console.log(map,arr);//{} []
}
//Set和Array
{
    //增
        let set=new Set();
        let arr=new Array();
        set.add({a:2});
        arr.push({a:2});
        console.log(set,arr);
    //改
        set.forEach(item=>item.a?item.a=6:'');
        arr.forEach(item=>item.a?item.a=6:'');
        console.log(set,arr);
    //查
        let sethas= set.has({a:6});
        let arrhas=arr.find(item=>item.a)
        console.log(sethas,arrhas);//true {'a':6}
    //删
        set.forEach(item=>item.a?set.delete(item):'');
        let index=arr.findIndex(item=>item.a);
        arr.splice(index,1);
        console.log(set,arr);//{} []
}

//Map Set Object对比
{
    //增
        let map=new Map();
        let set=new Set();
        let object={};
        map.set('a',2);
        set.add({a:2});
        object['a']=2;
        console.log(map,set,object);
    //改
        map.set('a',6);
        set.forEach(item=>item.a?item.a=6:'');
        object['a']=6;
        console.log(map,set,object);
    //查
       let maphas= map.has('a',6);
       let sethas= set.has({a:6});
       let objhas='a' in object;
        console.log(maphas,sethas,objhas);//true false true 
    //删
        map.delete('a',6)
        set.forEach(item=>item.a?set.delete(item.a):'');
       delete object['a'];
       console.log(map,set,object);
    }
//Object对象扩展新特性

//简洁性表达
{
    let o=1;
    let k=2;
    let es5={
        o:o,
        k:k
    }
    let es6={
        o,
        k
    }
    console.log(es5,es6);//相同的
    let es5Method={
        name:function(){
            return 'Json';
        }
    }
    let es6Method={
        name(){
            return 'Json';
        }
    }
    console.log(es5Method.name(),es6Method.name());//相同的Json
}
//属性表达式
{
    let k='b';
    let es5Shu={
        k:'c',
        b:'c'
    }//{k:'c',b:'c'}
    let es6Shu={
        [k]:'c'//[]把属性k包起来，是一个表达式
    }//{b:'c'}
    console.log(es5Shu,es6Shu);
}

//新增Object.API方法
{
    console.log(Object.is('abc','abc'));//true  Object.is在功能上与===是相同的
    console.log(Object.is('abc','ab'));//false
    console.log('abc'==='abc');//true
    console.log(Object.is([],[]));//false 虽然都是空数组，但整个数组的指向位置是不一样的
    console.log([]===[]);//false
    console.log([1,2]===[1,2]);//false
    console.log(Object.is([1,2],[1,2]));//false

    let object={
        o:1,
        k:2,
        m:3
    }
    for(let [index,value] of Object.entries(object)){
        console.log(value);//1 2 3
    }
}
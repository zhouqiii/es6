//Symbol-新的数据类型

//概念：为了具有唯一标识性,每个Symbol实例都是唯一的，因此将总返回false
//声明
{
    let s1 = Symbol();
    let s2 = Symbol();
    let s3 = Symbol('val')//可以给传入一个字符串参数，相当于给这个Symbol实例一个描述信息
    let s4 = Symbol('val');
    console.log(s1===s2);//false
    console.log(s3===s4);//false

    let s5 = Symbol.for('val')
    let s6 = Symbol.for('val');
    console.log(s5===s6);//true  想要使用Symbol，但又有可能相同，全局使用一个Symbol对象，使用Symbol.for
}

{
    let name='name';
    let obj = {
        [name]: '一斤代码',
        age: 18,
        title: 'Engineer'
     }
    console.log(Object.keys(obj));//{"name","age","title"}
    console.log(Object.getOwnPropertyNames(obj));//{"name","age","title"}
    console.log(JSON.stringify(obj))//{"name":"一斤代码","age":18,"title":"Engineer"}
    for(let [index,value] of Object.entries(obj)){
        console.log(index,value);//name 一斤代码 age 18 title Engineer
    }

    let name1=Symbol('name1');
    let obj1 = {
        [name1]: '一斤代码',
        age1: 18,
        title1: 'Engineer'
     }
    console.log(Object.keys(obj1));//{"age","title"}
    console.log(Object.getOwnPropertyNames(obj1));//{"age","title"}
    console.log(JSON.stringify(obj1))//{"age":18,"title":"Engineer"}
    for(let [index,value] of Object.entries(obj1)){
        console.log(index,value);// age 18 title Engineer
    }
    
    //也就是说Symbol类型未被包含在对象自身的属性之中，所以只有Symbol自身的api来获取
    console.log(Object.getOwnPropertySymbols(obj1))//[Symbol(name1)]单独出现Symbol
    console.log(Reflect.ownKeys(obj1))//["age1", "title1", Symbol(name1)]
    Object.getOwnPropertySymbols(obj1).forEach( function(item){
        console.log(obj1[item])//一斤代码
    })
}
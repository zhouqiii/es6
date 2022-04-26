// //Promise:是异步编程的解决方案 DOWN
//为了解决回调地狱
//有了promise对象，就可以将异步的流程以同步的方式表达出来，避免层层嵌套的回调函数

const { request } = require("express")

//1.promsie接受一个函数作为回调，这个函数的两个参数是resolve和reject
const promise = new Promise((resolve, reject) => {
    if(/* 成功的状态执行 */true) {
        resolve(res)//promise对象的状态由pending变为fulfilled
    }else{
        reject(err)//promise对象的状态由pending变为rejected
    }
})
// 2.然后用.then的方法接收resolved状态和rejected状态的回调函数
promise.then((res) => {
}, err => {
})
// 3.用promise手写一个http request即ajax
const getHttp = (url) => {
    const promise = new Promise((resolve, reject) => {
        const handler = () => {
            if(this.readyState !== 4) {
                return
            }
            if(this.status === 200) {
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        }
        let client = new XMLHttpRequest()
        client.open('GET', url)
        client.onreadystatechange = handler
        client.responseType = "json"
        client.setRequestHeader('Accept','application/json')
        client.send()
    })
    return promise
}
getHttp('/get.json').then((json) => {

}, err => {

})
// //es5通过回调实现异步
{
    let ajax=function(callback){
        console.log('先执行');
        setTimeout(function(){
            callback&&callback.call()
        },2000);
    }
    ajax(function(){
        console.log('后异步settimeout');//会在先执行打印两秒后才打印出后异步settimeout
    })
}
// //es6通过Promise实现异步,功能相同，维护性优
{
    let ajax=function(){
        console.log('执行2')
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();//执行
            },2000)
        })
    }
    ajax().then(function(){
        console.log('Promise','后异步settimeout')
    })
}
// //串行问题，可多次异步执行
{
    let ajax=function(){
        console.log('执行3-1')
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },2000)
        })
    }
    ajax()
      .then(function(){
        console.log('执行3-2')
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },2000)
        })
    })
      .then(function(){
        console.log('Promise','执行3-3')
    })
}
// //串行异步当某一步出错的解决方法
{
    let ajax=function(num){
        console.log('执行4-1');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve();
            }else{
                throw new Error('出错')//Uncaught (in promise) Error: 出错
            }
        })
    }
    ajax(6).then(function(){
        console.log('执行4-2');
    }).catch(function(err){
        console.log('catch',err)
    })//执行4-1 执行4-2 因为没有异常，就会顺利执行下一步，catch就不会执行
    ajax(4).then(function(){
        console.log('执行4-2')//执行4-1 后出错
    }).catch(function(err){
        console.log('catch',err)//catch Error:出错
    })
}
// //Promise的基本用法-Promise.all
{
    //所有的图片加载完后才添加到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img=document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve();//onload加载完以后resolve执行
            }
            img.onerror=function(err){
                reject(err);
            }
        })
    }

    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }

    Promise.all([//all将所有的Promise集合到一个Promise实例上，当该集合的Promise实例加载完后.then,也就是所有的图片加载完才showImg展示在页面上
        loadImg('http://img1.qunarzz.com/sight/p0/1904/30/306b6adb8c1a2d53a3.img.jpg_250x250_184074b9.jpg'),//每一个loadImg是一个Promise实例
        loadImg('http://img1.qunarzz.com/sight/p0/1806/d8/d8aefa62fe6a7f12a3.img.jpg_250x250_6f26eb7e.jpg'),
        loadImg('http://img1.qunarzz.com/sight/p0/1809/6b/6b900de5e5ac7239a3.img.jpg_250x250_ca8032c9.jpg')
    ]).then(showImgs)
}
// promsie.all经常使用的一个场景还有：
// 当页面初始需要发送多个new promise()封装的request，但是这些request之间并没有关系时
// bad
this.$nextTick(() => {
    this.requestList1()
    this.requestList2()
    this.requestList3()
})
function requestList1() {
    request1().then((res) => {
        this.data1 = res
    })
}
function requestList2() {
    request2().then((res) => {
        this.data2 = res
    })
}
function requestList3() {
    request3().then((res) => {
        this.data3 = res
    })
}
// good
this.$nextTick(() => {
    this.requestList()
})
function requestList() {
    Promise.all([
        request1(),
        request2(),
        request3()
    ]).then((res) => {
        this.data1 = res[0]
        this.data2 = res[1]
        this.data3 = res[2]
    })
}
// 或者使用async //good
this.$nextTick(() => {
    this.requestList()
})
async function requestList() {
   const data1 = request1()
   const data2 = request2()
   const data3 = request3()
   await data1;
   await data2;
   await data3;
   return [data1,data2,data3]
}
// ps:有时候异步操作使用promise代码比较复杂，还可以使用async简洁化
// bad
function getRequest() {
    request1()
        .then((res1) => {
            return request2(res1)
        }).then((res2) => {
            return request3(res2)
        })
}
// good
function getRequest() {
    const res1 = await request1()
    const res2 = await request2(res1)
    return request3(res2)
}
//Promise的基本用法-Promise.race
{
    //随机一张图片加载完，就添加到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img=document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve();//onload加载完以后resolve执行
            }
            img.onerror=function(err){
                reject(err);
            }
        })
    }

    function showImgs(img){
            let p=document.createElement('p');
            p.appendChild(img);
            document.body.appendChild(p);
    }

    Promise.race([//race是任意的，就是说任意的一个Promise先加载出来，就显示这一个Promise，其他的忽略
        loadImg('http://img1.qunarzz.com/sight/p0/1904/30/306b6adb8c1a2d53a3.img.jpg_250x250_184074b9.jpg'),//每一个loadImg是一个Promise实例
        loadImg('http://img1.qunarzz.com/sight/p0/1806/d8/d8aefa62fe6a7f12a3.img.jpg_250x250_6f26eb7e.jpg'),
        loadImg('http://img1.qunarzz.com/sight/p0/1809/6b/6b900de5e5ac7239a3.img.jpg_250x250_ca8032c9.jpg')
    ]).then(showImgs)

}
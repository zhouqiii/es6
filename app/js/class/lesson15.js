// //Promise:是异步编程的解决方案

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
//(安装插件babel-plugin-transform-decorators-legacy)
//Decorator-修饰器
//基本概念：修饰器是一个函数，用来修饰类的行为
//基本用法-定义和使用
{
    let readonly=function(target,name,descriptor){
        descriptor.writeble=false;//不可更改
        return descriptor;
    };

    class Test{
        @readonly//使用修饰器
        time(){
            return '2019-8-20';
        }
    }

    let test=new Test();
    console.log(test.time());//2019-8-20

    // test.time=function(){
    //    console.log('reset value')//报错，无法更改
    // }
    // console.log(test.time());
}

{
    let typename=function(target,name,descriptor){
        target.myname='es6';//target指类本身，myname是类的静态属性
    }

    @typename//修饰器也可以写在类外，必须在class之前
    class Test{

    }
    
    console.log('类修饰器decorator',Test.myname);
}

{
    //安装第三方修饰器的及时库：core-decorators;npm install core-decorators 安装完库，用import引进所需的库，如typename，直接@使用就行，不用手写
}

//日志统计场景
{
    let log=(type)=>{
        return function(target,name,descriptor){
           let method=descriptor.value;
           descriptor.value=(...arg)=>{
               method.apply(target,arg);
               console.info(`log${type}`);//使日志更加具有可复用性
           }
        }
    }

    class Ad{
        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }

    let ad=new Ad();
    ad.show();
    ad.click();
    //ad is show
//1 logshow
// ad is click
// logclick
}
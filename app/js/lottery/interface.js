//接口-获取数据
import $ from 'jqury';//es6-模块引入

class Interface{//class es6-定义类
    //getOmit-获取遗漏，参数issue是获取遗漏的数据，是string
    getOmit(issue){//接口
        let self=this;
        return new Promise((resolve,reject)=>{//es6-Promise对象就可以在外部直接调用方法用.then()的方法获取数据，解决回调和异步操作的问题
           $.ajax({
               url:'/get/omit',
               data:{
                   issue:issue
               },
               dataType:"json",
               success:function(res){
                   self.getOmit(res.data);//可以直接调用该方法使用该接口接受的数据，从而避免回调方法
                   resolve.call(self,res);
               },
               error:function(err){
                   reject.call(err);
               }

           })
        });
    }
    //getOpenCode-定义当前开奖号码的接口
    getOpenCode(issue){
        let self=this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/opecode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOpenCode(res.data);
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }
    //getState-当前状态的接口
    getState(issue){
        let self=this;
        return new Promise((resolve,reject)=>{//箭头函数的this指向是定义时候的指向而不是使用时的指向
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }
}
export default Interface
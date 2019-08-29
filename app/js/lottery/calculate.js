//计算注数和金额，不同的任几玩法和选择不同的号码会出现不同的注数和不同的金额
class Calculate{
    computeCount(active,play_name){//两个参数，一个是选中号码，一个是选择的玩法,return number 注数
        let count=0;
        let arr=new Array(active).fill(0);
        const existplay=this.play_list.has(play_name);
        if(existplay && play_name.at(0)==='R'){//因为给玩法的标注是以R开头
            count=Calculate.combine(arr,play_name.split('')[1]);
        }  
    }
    //奖金预测方法 return array奖金范围
    computeBonus(active,play_name){
        const play=play_name.split('');
        const self=this;
        let arr=new Array(play[1]*1).fill(0);
        let min,max;
        if(play[0]==='r'){
            let min_active=5-(11-active);
            if(min_active>0){
                if(min_active-play[1]>=0){
                    arr=new Array(min_active).fill(0);
                    min=Calculate.combine(arr,play[1]).length;
                }else{
                    if(play[1]-5>0 && active-play[1]>=0){
                        arr=new Array(active-5).fill(0);
                        min=Calculate.combine(arr,play[1]-5).length;
                    }else{
                        min=active-play[1]>-1?1:0;
                    }
                }
            }else{
                min=active-play[1]>-1?1:0;  
            }
            let max_active=Math.min(active,5);
            if(play[1]-5>0){
                if(active-play[1]>=0){
                    arr=new Array(active-5).fill(0);
                    min=Calculate.combine(arr,play[1]-5).length; 
                }else{
                    max=0;
                }
            }else if(play[1]-5<0){
                arr=new Array(active,5).fill(0);
                min=Calculate.combine(arr,play[1]).length; 
            }else{
                max=1;
            }
            }
            return [max,min].map(item=>item*self.play_list.get(play_name).bonus);
    }
    //静态方法-注数的组合运算 与选择的号码(arr)和组合的方式(即play_name)有关
    static combine(arr,size){
        let allResult=[];
        (function f(arr,size,result){
            let arrlength=arr.length;
            if(size>arrlength){
                return;
            }if(size===arrlength){
                allResult.push([].concat(result,arr)); 
            }else{
                for(let i=0;i<arrlength;i++){
                    let newResult=[].concat(result);
                    newResult.push(arr[i]);
                    if(size===1){
                        allResult.push(newResult)
                    }else{
                        let newArr=[].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr,size-1,newResult);//es6使用递归时一定要起个匿名函数
                    }
            }
        }})(arr,size,[])
    }
}
export default Calculate
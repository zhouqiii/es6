//计算注数和金额，不同的任几玩法和选择不同的号码会出现不同的注数和不同的金额
class Calculate{
    computeCount(active,play_name){//两个参数，一个是选中号码，一个是选择的玩法
        let count=0;
        let arr=new Array(active).fill('0');
        const existplay=this.play_list.has(play_name);
        if(existplay && play_name.at(0)==='R'){//因为给玩法的标注是以R开头
            count=Calculate.combine(arr,play_name.split('')[1]);
        }  
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
                    let newResult=[].concat(resut);
                    newResult.push(arr[i]);
                }if(i===1){
                    allResult.push(newResult)
                }else{
                    let newArr=[].concat(arr);
                    newArr.splice(0,i+1);
                    f(newArr,size-1,newResult);
                }
            }
        })(arr,size,[])
    }
}
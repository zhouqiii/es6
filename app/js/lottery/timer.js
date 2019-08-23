class Timer{
    counttime(end,update,handle){
        const now=new Date().getTime();
        const self=this;
        if(now-end){
            handle.call(self);
        }else{
            let last_time=end-now;//单位是毫秒
            const haomiao_d=1000*60*60*24;
            const haomiao_h=1000*60*60;
            const haomiao_m=1000*60;
            const haomiao_s=1000;
            let d=Math.floor(last_time/haomiao_d);
            let h=Math.floor((last_time-d*haomiao_d)/haomiao_h);
            let m=Math.floor((last_time-d*haomiao_d-h*haomiao_h)/haomiao_m);
            let s=Math.floor((last_time-d*haomiao_d-h*haomiao_h-m*haomiao_m)/haomiao_s);
            let timeshow=[];
            if(h>0){
                timeshow.push(`<em>${d}</em>天`);
            }
            if(timeshow.length||(h>0)){
                timeshow.push(`<em>${h}</em>时`);
            }
            if(timeshow.length||(m>0)){
                timeshow.push(`<em>${m}</em>分`);
            }
            if(timeshow.length||(s>0)){
                timeshow.push(`<em>${s}</em>秒`);
            }
            self.last_time=timeshow.join('');
            update.call(self,timeshow.join(''));
            setTimeout(function(){
                self.counttime(end,update,handle);
            },1000);
        }
    }
}

export default Timer
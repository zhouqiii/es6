//Proxy（代理对象功能，连接用户操作和真实数据对象）和Reflect的概念

//Proxy
{
    let obj={
        time:'2019-8-16',
        name:'friday',
        ret:123,
        _source:666
    }
    
    let moniter=new Proxy(obj,{
        //拦截对象读取属性
        get(target,key){
            return target[key].replace('2019','2022')
        },
        //拦截对象设置属性
        set(target,key,value){
            if(key==='name'){
                return target[key]=value;
            }else{
                return target[key];
            }
        },
        //拦截属性判断-返回boolean值
        has(target,key){
            if(key==='ret'){
                return target[key]
            }else{
                return false;
            }
        },
        //拦截对象删除属性操作
        deleteProperty(target,key){
        if(key.indexOf('_')>-1){
            delete target[key];
            return true;
        }else{
            return target[key]
        }
        },
        //拦截对象的keys，和Object.getOwnPreopertySymbols，和Object.getOwnpropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='ret')
        }
    }) 
    
    console.log('get',moniter.time);//2022-8-16

    moniter.time='2013';
    moniter.name='weekends';
    console.log('set',moniter.time,moniter.name);//2022-8-16 weekends

    console.log('has','name' in moniter,'ret' in moniter);//false true
    
    console.log('ownKeys',Object.keys(moniter));//["time", "name", "_source"]

    // delete moniter.name;
    // delete moniter._source;
    // console.log('deleteProperty',moniter);//{time: "2019-8-16", name: "weekends", ret: 123}
    
}
//Reflect对象建立直接用，不用new,Proxy有的用法Reflect都有，并且用法相同，
{
    let obj={
        time:'2019-8-16',
        name:'friday',
        ret:123,
        _source:666
    }
    console.log('Reflect get',Reflect.get(obj,'name'));//friday
    Reflect.set(obj,'name','weekends');
    console.log('Reflect set',obj.name);//weekends
    console.log('Reflect has',Reflect.has(obj,'name'))//true
}


//Proxy和Reflect的适用场景
{
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va=this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`不能设置${key}为${value}`)
                    }
                }else{
                    throw Error(`${key}不存在`)
                }
            }
        })
    }

    const personValidators={
        name(val){
            return typeof val ==='string'
        },
        age(val){
            return typeof val === 'number' && val>18
        }
    }

    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
            return validator(this,personValidators)
        }
    }
    const person=new Person('lilei',30);
    console.log(person);
    person.sex='female';
    console.log(person);//sex不存在
    person.name=22;
    console.log(person);//不能设置name为22
    person.name='han mei mei';
    console.log(person);//{name:'han mei mei',age: 30}
}
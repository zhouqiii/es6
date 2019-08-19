//类的概念

//基本语法，定义和生成实例
{
    class Parent{//定义类
        constructor(name='es6') {
            this.name=name;
        }
    }
    let v_parent=new Parent('v');//生成实例
    console.log('生成类和实例',v_parent);
}
//类的继承
{
    class Parent{
        constructor(name='es6') {
            this.name=name;
        }
    }
    class Child extends Parent{//extends就是继承

    }
    console.log('继承',new Child());//{name: "es6"}

}
{
    class Parent{
        constructor(name='es6') {
            this.name=name;
        }
    }
    class Child extends Parent{//extends就是继承
        constructor(name='child'){
            super(name);//子类向父类传递参数，则把该属性放在super里传递
            this.type='newType';//子类增加属性，增加属性写在super后面；
        }

    }
    console.log('继承',new Child());//{name: "child"}

}
//getter setter
{
    class Parent{//定义类
        constructor(name='es6') {
            this.name=name;
        } 
        //getter
        get longName(){
            return this.name
        }
        //setter
        set longName(value){
            this.name=value;
        }
    }
    let v=new Parent();
  console.log('getter',v.longName);//es6
  console.log('getter',v);//{name: "es6"}
  v.longName='changees6';
  console.log('setter',v.longName);//changees6
  console.log('getter',v);//{name: "changees6"}
}
//静态方法-static
{
    class Parent{
        constructor(name='es6') {
            this.name=name;
        }
        static tell(){//用static定义静态方法，静态方法就是通过类去调用，而不是通过类的实例去调用
            console.log('tell');
        }  
    }
     Parent.tell();//静态方法就是通过类去调用，而不是通过类的实例去调用
}
//静态属性
{
    class Parent{
        constructor(name='es6') {
            this.name=name;
        }
    }
    Parent.type='newType';//静态属性直接在类上定义
    console.log('静态属性直接在类上定义',Parent.type);
}
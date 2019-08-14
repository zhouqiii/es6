//字符串扩展-字符串新增特性：Unicode表示法，遍历接口，模板字符串，字符串对象新增方法
//安装babel-polyfill库 babel能将es6转成es5，但不识别es6的api，babel-polyfill是能将es6新的方法api也识别转换的

//Unicode表示法
{
    console.log('a',`\u0061`);//a a 
    console.log('s',`\u20BB7`);// s 乱码大于二进制0xFFF（s），Unicode会被识别成两个字节，错误显示
    console.log('s',`\u{20BB7}`);// 𠮷 成功显示，也就是说es6在Unicode表示两个字节的编码上使用的是{}
}

//unicode的api-codePointAt()能识别大于两个字节的unicode字符（大于0xFFF），返回十进制码点
{
    let s='𠮷';
    let a='a';
    console.log('length',a.length);//length 1 a的Unicode编码是一个字节
    console.log('length',s.length);//length 2 s的Unicode编码是两个字节
    console.log('0',s.charAt(0));//charAt取字符 乱码 也就说明在es5中charAt这个api有缺陷
    console.log('1',s.charAt(1));
    console.log('0',a.charAt(0));//a
    console.log('code0',s.charCodeAt(0));//charCodeAt返回十进制码点
    console.log('code1',s.charCodeAt(1));

    let s2='𠮷a';
    console.log('0',s2.codePointAt(0));//0 134071返回十进制码点
    console.log('0',s2.codePointAt(0).toString(16));//0 20BB7  toString转换成字符的unicode
    console.log('1',s2.codePointAt(1));//1 57271与 console.log('code1',s.charCodeAt(1))返回值相同
    console.log('2',s2.codePointAt(2));//2 97 a的十进制码点

    let s3='a𠮷';
    console.log('0',s3.codePointAt(0));//0 97
    console.log('0',s3.codePointAt(0).toString(16));//0 61
    console.log('1',s3.codePointAt(1));//1 134071
    console.log('1',s3.codePointAt(1).toString(16));//1 20BB7 
    console.log('2',s3.codePointAt(2));//2 57271
}

//unicode的api-fromPointAt（）能处理大于两个字节的unicode字符，返回字符
{
    console.log(String.fromCharCode("0x20bb7"));//乱码
    console.log(String.fromCodePoint("0x20bb7"));// 𠮷
}

//字符串的遍历器api-i of string
{
    let str='\u{20bb7}abc'
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i])
    }//乱码 乱码 a b c
    for(let n of str){
        console.log('es6',n)
    }//  𠮷 a b c 
}

//字符串新增的api方法
{
    let str="string";
    console.log('include',str.includes('rt'));//false
    console.log('include',str.includes('tr'));//true
    console.log('start',str.startsWith('s'));//true
    console.log('start',str.startsWith('str'));//true
    console.log('end',str.endsWith('g'));//true
    console.log('end',str.endsWith('ng'));//true
    console.log('repeat',str.repeat(2));//stringstring
    console.log('repeat',str.repeat(3));//stringstringstring
}

//模板字符串
{
    let name='hello wrold';
    let script='es6';
    let m=`i am ${script},${name}`;//注意格式，用``包裹，${}包裹变量名
    console.log(m);
}
//标签模板
{
    let user={
        name: 'es6',
        script: 'hello wrold'
    }
    console.log(abc`i am ${user.name},${user.script}`);//i am ,,,es6hello world
    function abc(s,v1,v2){
        console.log(s,v1,v2);//["i am ",",",""] "es6" "hello wrold",s=["i am ",",",""],v1="es6",v2="hello wrold"
        return s+v1+v2;
    }
}

//api
{
    console.log('1'.padStart(2,'0'));//01 padStart前弥补空白,如年月日就经常使用补白
    console.log('1'.padStart(3,'00'));//001
    console.log('1'.padEnd(2,'0'));//10
}
{
    console.log(String.raw`Hi\n${1+2}`);//Hi\n3 \n换行符没有生效 raw会对\转义，不换行
    console.log(`Hi\n${1+2}`);//Hi 换行3
}
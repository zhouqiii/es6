//正则扩展-正则新增特性：构造函数的变化，正则方法的扩展，u、y、s修饰符


//构造函数
//es5-构造正则函数只有两种写法，1是两个字符，2是//写法只有一个参数，不可混用
{
    let regexp=new RegExp('abc','i');//RegExp是正则表达式匹配函数，返回布尔值，i修饰符代表不区分大小写
    let regexp2=new RegExp(/abs/i);
    console.log(regexp.test('ACB'),regexp2.test('abSD123'));//false true
}
//es6
{
    let regexp3=new RegExp(/abS/gi);
    console.log(regexp3.flags);//打印出gi flags是es6新增属性绑定正则的修饰符
}
{
    let regexp3=new RegExp(/abS/gi,'i');
    console.log(regexp3.flags);//打印出i es6允许前面是正则表达式，后面是修饰字符两个参数，后面的修饰符会覆盖掉正则里的修饰符
}

//y修饰符
{
    let s='bbb_bb_b';//.exec是匹配字符,全局匹配，可以通过反复调用exec方法匹配全局，返回数组，放匹配的结果
    let a=/b+/g;
    let b=/b+/y;//区别是g：从上一次匹配想开始匹配，直到找到匹配项，返回匹配；y：从上次匹配项以后的第一项开始匹配，第一项开始能匹配成功返回数组，匹配不成功null

    console.log('one',a.exec(s),b.exec(s));//第一次调用exec匹配['bbb',index:0] ['bbb',index:0]
    console.log('two',a.exec(s),b.exec(s));//第二次调用exec匹配['bb',index:4] null

    console.log(a.sticky,b.sticky);//false true es6新增的sticky属性判断是否正则使用y修饰符
}

//u修饰符
{
//1-识别为一个整体
    console.log('one',/^\uD83D/.test('\uD83D\uDC2A'));//ture 把\BDn8\uDC2A当成两个字母
    console.log('two',/^\uD83D/u.test('\BDn8\uDC2A'))//false 把\BDn8\uDC2A当成一个字母
//2-u{}匹配必须加u修饰符才能识别
    console.log('one',/\u{61}/.test('a'));//false a的unicode编码是61，
    console.log('one',/\u{61}/u.test('a'));//true u{}必须加上u修饰符才能识别{}内的unicode编码
//3-大于两个字节的匹配必须加u修饰符才能匹配到
    console.log(`\u{20BB7}`);//打印出“𠮷” ``是es6新特性处理特殊转义字符
    
    let s='𠮷';//给s赋值一个Unicode编码超过四位的字符

    console.log(/^.$/.test(s));//false .是es5里默认去小于两个字节长度里的所有匹配的，显示false，说明unicode超过四位的.也无法成功匹配
    console.log(/^.$/u.test(s));//true 加u修饰符是可以匹配到的，可以识别超过两个字节的unicode（即时加u修饰符，.也无法识别行分隔符，段分隔符，换行分隔符，回车符，遇到这些应该使用s修饰符）

    console.log(/𠮷{2}/.test('𠮷𠮷'));//false 这里的{2}是说明两个字节𠮷，两个字节无法匹配
    console.log(/𠮷{2}/u.test('𠮷𠮷'));//true 凡是大于两个字节的匹配，加u才能成功匹配
}


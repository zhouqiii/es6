//数值扩展-数值处理新增的特性 1.新增的数学处理方法2.方法的调整

{
    console.log('二进制以0b开头',0B111110111);
    console.log('二进制以0b开头',0B111110111);
    console.log('八进制以0o开头',0o767);
    console.log('八进制以0o开头',0O767);
}

{
    console.log('NaN',Number.isFinite(NaN));//false
    console.log('1/3',Number.isFinite(1/3));//true
    console.log('2',Number.isFinite('2'));//false
    console.log('NaN',Number.isNaN(NaN))//true
    console.log('a',Number.isNaN('a'));//false
    console.log('2',Number.isNaN(2));//false
    console.log('2',Number.isNaN('2'));//false
    console.log(Number.isSafeInteger(5));//true
    console.log(Number.isSafeInteger('a'));//false
    console.log(Number.isSafeInteger(NaN));//false
    console.log(Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);//js有效值2*(-53)--2*(53)
    console.log(Number.isInteger('a'));//false 
    console.log(Number.isInteger(NaN));//false
    console.log(Number.isInteger(2));//true 
    console.log(Number.isInteger(2.1));//false 
    console.log(Number.isInteger(2.0));//true
}

//Math方法会先判断能否转义成数字
{
    console.log(Math.sign(2));//1
    console.log(Math.sign(-2));//-1
    console.log(Math.sign(0));//0
    console.log(Math.sign('2'));//1
    console.log(Math.sign('a'));//NaN

    console.log(Math.trunc(-2));//-2
    console.log(Math.trunc(2));//2
    console.log(Math.trunc(-2.5));//-2
    console.log(Math.trunc(2.9));//2
    console.log(Math.trunc(2.1));//2
    console.log(Math.trunc('2.5'));//2
    console.log(Math.trunc(NaN));//NaN
    console.log(Math.trunc('a'));//NaN
}

{
    console.log(Math.cbrt(8));//2
    console.log(Math.cbrt(-8));//-2
    console.log(Math.cbrt(0));//0
    console.log(Math.cbrt('8'));//2
    console.log(Math.cbrt(NaN));//NaN
    console.log(Math.cbrt('a'));//NaN
}
// import './class/lesson1'
// import './class/lesson2'
// import './class/lesson3'
// import './class/lesson4'
import 'babel-polyfill'
// import './class/lesson6'
// import './class/lesson8'
// import './class/lesson9'
// import './class/lesson10'
// import './class/lesson11'
// import './class/lesson13'
// import './class/lesson14'
// import './class/lesson15'
// import './class/lesson16'
// import './class/lesson17'
// import './class/lesson18'
import {A,test} from './class/lesson19';//1-想暴露哪些数据，import添加哪些
console.log(A,test);

import * as lesson from './class/lesson19';//2-import添加文件内所有导出的数据
console.log(lesson.A,lesson.test);

import lesson19 from './class/lesson19'//3-import直接引入文件
console.log(lesson19.A)//123
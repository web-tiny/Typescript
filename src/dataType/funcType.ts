/*
 * @Author: Tiny
 * @Date: 2019-04-26 18:26:34
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-04-26 18:45:29
 */
// 输入和输出的的类型都要考虑到，
function sum2 (x: number, y: number): number {
  return x + y;
}

let mySum = function (x: number, y: number): number {
  return x + y;
};

/** 
 * TS中的=>:
 * =>左边是输入类型，需要用括号括起来，右边是输出类型
*/
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}

// 接口定义函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 可选参数：必须出现在必选参数的后面
function buildName (firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('tom', 'cat');
let tom2 = buildName('tom');

// 默认参数：此时就不受[可选参数必须接在必需参数后面]的限制了
function buildName2 (firstName: string = 'jiao', lastName: string) {
  return firstName + ' ' + lastName;
}

// 剩余参数, rest参数只能是最后一个参数
function push(arr, ...item) {
  item.forEach( i => arr.push(i));
}
let a: number[];
push(a, 1, 2, 3);
console.log(a)

/** 
 * 函数重载:
 * 重载允许一个函数接受不同数量或类型的参数，做出不同的处理
*/
function reverse (x: number): number;
function reverse (x: string): string;
function reverse (x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
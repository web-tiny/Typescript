/*
 * @Author: Tiny
 * @Date: 2019-04-26 18:26:34
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-04-26 18:45:29
 */
// 输入和输出的的类型都要考虑到，
function sum (x: number, y: number): number {
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

// 默认参数
function buildName2 (firstName: string, lastName: string = 'cat') {
  return firstName + ' ' + lastName;
}
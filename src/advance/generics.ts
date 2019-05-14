/*
 * @Author: Tiny
 * @Date: 2019-05-14 14:55:02
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-14 15:41:34
 */
/** 
 * 泛型：
 * 指在定义函数，接口，类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
*/
function createArray<T> (length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
createArray<string>(3, 'x');

// 多个类型参数
function swap<T, U> (tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
console.log(swap([7, 'seven']));

// 泛型约束
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise> (arg: T): T {
  console.log(arg.length);
  return arg;
}
console.log(loggingIdentity('tiny'));

// 泛型接口
// 使用接口的方式来定义一个函数需要符合的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch2: SearchFunc;
mySearch2 = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}

// 使用含有泛型的接口来定义函数的形状
interface CreateArrayFunc {
  <T>(length: number, value: T): Array <T>
}
let createArray2: CreateArrayFunc;
createArray2 = function <T>(length: number, value: T): Array <T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
console.log(createArray2(3, 'x'));

// 把泛型参数放到接口名上
interface CreateArrayFunc3<T> {
  (length: number, value: T): Array<T>;
}
let createArray3: CreateArrayFunc3<any>;
createArray3 = function<T> (length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

/** 
 * 泛型类：用于类的类型定义
*/
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
}

// 泛型参数的默认类型
function createArray4<T = string> (length: number, value: T): Array <T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
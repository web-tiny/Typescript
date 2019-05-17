/*
 * @Author: Tiny
 * @Date: 2019-04-26 16:28:14
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-17 15:18:37
 */
// type[] 表示法
let fibonacci: number[] = [1, 2, 3, 4]

// 数组泛型
let fibonacci2: Array<number> = [1, 2]

// 用接口表示数组
interface InumberArray {
  [index: number]: number
}

// 类数组:不是数组类型,常见的类数组都有自己的接口定义：如：IArguments,NodeList, HTMLCollection
function sum () {
  let args: IArguments = arguments;
}
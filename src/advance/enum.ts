/*
 * @Author: Tiny
 * @Date: 2019-05-10 18:44:43
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-10 19:00:14
 */
/** 
 * 枚举：
 * 用于取值被限定再一定范围内的场景，
 * 比如：一周只能由7天，颜色限定未红绿蓝等
 * 定义：使用enum来定义
*/
enum Days { Sun, Mon, Tue, Wed = 7, Thu, Fri, Sat }

// 枚举成员会被赋值为从0开始递增的数字
console.log(Days['Sun'] === 0);
console.log(Days['Sat'] === 6);
console.log(Days['Wed'] === 3);
console.log(Days['Thu'] === 8);

/** 
 * 枚举项有两种类型：
 * 常数项
 * 计算所得想
*/
enum Color { Red, Green, Blue = 'blue'.length }

// 常数枚举:常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
const enum Directive {
  Up,
  Down,
  Left,
  Right
}

// 外部枚举:使用 declare enum 定义的枚举类型,declare 定义的类型只会用于编译时的检查，编译结果中会被删除
declare enum Directives {
  Up,
  Down,
  Left,
  Right
}

// 外部枚举与声明语句一样，常出现在声明文件中
declare const enum Directives2 {
  Up,
  Down,
  Left,
  Right
}
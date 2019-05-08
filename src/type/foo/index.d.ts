/*
 * @Author: Tiny
 * @Date: 2019-04-28 14:20:41
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-04-28 16:43:15
 */
/** 
 * 当使用第三方库时，我们需要应用它的声明文件，才能获得对应的代码补全，接口提示等功能
*/
// 书写声明文件
/** 
 * 全局变量的声明文件：
 * declare var/let/const 声明全局变量
 * declare function 声明全局方法
 * declare class 声明全局类
 * declare enum 声明全局枚举类型
 * declare namespace 声明全局对象（含有子属性）
 * interface and type 声明全局类型
 * 
 * 声明语句中只能定义类型，不能定义具体的值
*/
declare const jq: (select: string) => any;

declare function jq2(selector: string): any;

declare class Animal {
  constructor(name: string);
  sayHi(): string;
}

declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

/** 
 * 在declare namespace内部直接使用function ajax声明函数
 * 而不是使用declare function ajax,
 * 类似的，也可用const class enum
*/
declare namespace jq3 {
  function ajax(url: string, setting?: any): void;
  const version: number;
  class Event {
    blur(eventType: EventType): void
  }
  enum EventType {
    CustomClick
  }
  /** 
   * 嵌套的命名空间：
   * 如果对象拥有深层的层级，则需要嵌套的namespace来声明深层的属性的类型
   * 注：如果jq3下仅有fn这一个属性(没有ajax，verison等其他属性或方法)，则可以不需要嵌套namespace
  */
  namespace fn {
    function extend(object: any): void
  }
}

// interface， type
interface AjaxSettings {
  method?: 'get' | 'post'
  data?: any;
}

// 防止命名冲突
declare namespace jq4 {
  interface AjaxSettings {
    method?: 'get' | 'post'
    data?: any;
  }
  function ajax(url: string, setting?: AjaxSettings): void;
}

// 声明合并
declare function jq5(selector: string): any;
declare namespace jq5 {
  function ajax(url: string, settings?: any): void;
}

/** 
 * npm包声明文件与全局变量的声明文件
 * npm包声明文件中：
 *  declare不再会声明一个全局变量，只是当前文件的一个局部变量，需要配合export和import使用
 * 跟ES6的模块一样的
*/
// 与 declare namespace 类似，export namespace 也是用来导出一个拥有子属性的对象：
export namespace foo {
  const name: string;
  namespace bar {
    function baz(): string;
  }
}

// export default function foo2(): string;

/** 
 * UMD库：
 * 1: 定义：既可以通过<script>标签引入，又可以通过import导入的库称为UMD库
 * 2：原因：相比于 npm 包的类型声明文件，我们需要额外声明一个全局变量，为了实现这种方式，ts 提供了一个新语法 export as namespace
 * 3：使用场景：一般使用 export as namespace 时，都是先有了 npm 包的声明文件，再基于它添加一条 export as namespace 语句，
 * 即可将声明好的一个变量声明为全局变量
*/
export as namespace foo3;
export default foo3;
declare function foo3(): string;
declare namespace foo3 {
  const bar: number;
}

/** 
 * 扩展全局变量
 * 使用场景：有时候外面在代码里扩展了一个全局变量，可是他的类型却没有相应的更新，这时就会导致ts编译错误，
 * 此时就需要来扩展全局变量类型
*/
interface String {
  prependHello (): string;
}

/** 
 * 对于 npm 包或 UMD 库，如果导入此库之后会扩展全局变量，则需要使用另一种语法在声明文件中扩展全局变量的类型，那就是 declare global
*/
declare global {
  interface String {
    prependHello(): string;
  }
}
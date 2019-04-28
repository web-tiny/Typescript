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

// TODO:声明合并
/*
 * @Author: Tiny
 * @Date: 2019-05-10 18:15:55
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-10 18:23:57
 */
/** 
 * 类型别名：给个类型起个新名字，通过type定义
 * 类型别名常用于联合类型
*/
type Name = string;
type NameResolver = () => string;
type NameOrResolve = Name | NameResolver;
function getName (n: NameOrResolve): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

// 字符串字面量类型：用来约束取值只能是某几个字符串中的一个,通过type定义
type EventName = 'click' | 'scroll' | 'mousemove';
function handleEvent (ele: Element, event: EventName) {

}
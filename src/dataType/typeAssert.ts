/*
 * @Author: Tiny
 * @Date: 2019-04-28 10:56:41
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-04-28 11:00:16
 */
/** 
 * 类型断言的语法：
 * <类型>值
 * 值as类型
 * 注：类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
*/
function getLength2 (something: string | number): number {
  if ((<string> something).length) {
    return (<string> something).length
  } else {
    return something.toString().length
  }
}
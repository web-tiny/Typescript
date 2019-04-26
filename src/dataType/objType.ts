/*
 * @Author: Tiny
 * @Date: 2019-04-26 15:58:05
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-04-26 16:25:06
 */
// 1：定义的变量比接口多/少属性是不允许的
interface Ipersion {
  name: string;
  age: number;
  // name ? 可选属性
  gender?: string;
  /** 
   * [name: type] 定义任意类型,
   * 注意：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
  */
  [propName: string]: any;
  /** 
   * readonly name 只读属性：
   * 注意：只读属性的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
  */
  readonly id: number;
}

let tom: Ipersion = {
  name: 'Tom',
  age: 12,
  gender: 'male',
  id: 1
}
// tom.id = 2
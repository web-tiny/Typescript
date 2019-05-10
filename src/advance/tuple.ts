/*
 * @Author: Tiny
 * @Date: 2019-05-10 18:27:13
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-10 18:34:58
 */
/** 
 * 元组：合并不同类型的对象
 * 数组：合并相同类型的对象
*/
let information: [string, number] = ['jiao', 20]

// 允许对每项分别赋值，单是初始化的时候需要提供所有元素类型中指定的项
// information[0] = 'liujing'

// information = ['ting']

information.push('https:// baidu.com')
// information.push(false)
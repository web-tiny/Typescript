/*
 * @Author: Tiny
 * @Date: 2019-05-14 13:33:20
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-14 14:53:34
 */

/** 
 * TS中的类：
 * 用public/private/protected来修饰属性或方法
 * 抽象类：
 *  1：abstract 用于定义抽象类和其中的抽象方法
 *  2：抽象类不能实例化
 *  3：抽象类中的抽象方法必须被子类实现
*/
abstract class Animal {
  public name: string;
  private age: number;
  protected education: string;

  public constructor(name: string, age: number, education: string) {
    this.name = name;
    this.age = age;
    this.education = education
  }
  public abstract sayHi(): string;
}
// let animal = new Animal('Jack', 23, 'doctor');
// console.log(animal.name);

class Cat extends Animal {
  constructor (name: string, age: number, education: string) {
    super(name, age, education);
  }
  public sayHi(): string {
    console.log(`Meow, my name is ${this.name}`);
    return `Meow, my name is ${this.name}`
  }
}

let cat: Cat = new Cat('tony', 23, 'doctor')
console.log(cat.sayHi);

/** 
 * 类与接口：
 * 接口的另一个用途：对类的一部分进行抽象
*/
// 一个类实现多个接口,类实现接口通过关键字implements来实现
interface Alarm {
  alert();
}
interface Light {
  lightOn();
  lightOff();
}
class Car implements Alarm, Light {
  alert() {
    console.log('car alert');
  }
  lightOn() {
    console.log('car light on');
  }
  lightOff() {
    console.log('car light off');
  }
}

// 接口继承接口
interface LightableAlarm extends Alarm {
  lightOn();
  lightOff();
}

// 接口继承类
class Point {
  x: number;
  y: number;
}
interface Point3d extends Point {
  z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 }

// 函数也可以有自己的属性和方法
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}
let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;
function alertName(): void {
  alert('my name is Tiny');
}

let num: number = undefined;
let u: undefined;
let number: number = u
console.log(number)

let uu: void;
// void 类型不能分配给numer类型
// let number2: number = uu

// 普通类型的数据不能在赋值过程中改变类型，除非被申明为any类型
let anyValue: any = 'seven'
console.log(anyValue.myName)

anyValue.alertName();

// 联合类型,注意区分js的或(||)运算符，两者之一
let myFavoriteNumber: string | number;

// 联合类型在被赋值时会根据类型推论的规则推断出一个类型
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length);
myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length);

/** 
 * 当Ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
*/
function getLength (something: string | number): string {
  return something.toString();
}
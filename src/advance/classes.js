var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(name, age, education) {
        this.name = name;
        this.age = age;
        this.education = education;
    }
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, education) {
        return _super.call(this, name, age, education) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log("Meow, my name is " + this.name);
        return "Meow, my name is " + this.name;
    };
    return Cat;
}(Animal));
var cat = new Cat('tony', 23, 'doctor');
console.log(cat.sayHi);
var Car = (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('car alert');
    };
    Car.prototype.lightOn = function () {
        console.log('car light on');
    };
    Car.prototype.lightOff = function () {
        console.log('car light off');
    };
    return Car;
}());
var Point = (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;

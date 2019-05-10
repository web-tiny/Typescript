function sum2(x, y) {
    return x + y;
}
var mySum = function (x, y) {
    return x + y;
};
var mySum2 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('tom', 'cat');
var tom2 = buildName('tom');
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = 'jiao'; }
    return firstName + ' ' + lastName;
}
function push(arr) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    item.forEach(function (i) { return arr.push(i); });
}
var a;
push(a, 1, 2, 3);
console.log(a);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

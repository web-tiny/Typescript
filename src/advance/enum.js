var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 7] = "Wed";
    Days[Days["Thu"] = 8] = "Thu";
    Days[Days["Fri"] = 9] = "Fri";
    Days[Days["Sat"] = 10] = "Sat";
})(Days || (Days = {}));
console.log(Days['Sun'] === 0);
console.log(Days['Sat'] === 6);
console.log(Days['Wed'] === 3);
console.log(Days['Thu'] === 8);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 'blue'.length] = "Blue";
})(Color || (Color = {}));
var Directive;
(function (Directive) {
    Directive[Directive["Up"] = 0] = "Up";
    Directive[Directive["Down"] = 1] = "Down";
    Directive[Directive["Left"] = 2] = "Left";
    Directive[Directive["Right"] = 3] = "Right";
})(Directive || (Directive = {}));

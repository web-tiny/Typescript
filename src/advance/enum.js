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

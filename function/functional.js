function getDetails(id, name, age) {
    console.log(id, name, age);
}
getDetails("sam");
//var args // rest parameter
function getAge() {
    var age = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        age[_i] = arguments[_i];
    }
    console.log(age);
}
getAge(10);
//default param function
function data(id, age, name) {
    if (age === void 0) { age = 0; }
    if (name === void 0) { name = ""; }
    console.log(id, age, name);
}
data(12, 23, "sam");

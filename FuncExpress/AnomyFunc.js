/**
 * 匿名函数：函数作为值！
 * 1. 函数作为值赋值给其他变量
 * 2.函数作为其他函数的返回值
 */

var getResult;
var condition = true;
if (condition) {
    getResult = function() {
        console.log("true");
    }
} else {
    getResult = function() {
        console.log("false")
    }
}



function returnAnomyFunc() {
    var a = 1;
    return function() {
        var b = 2
        console.log(a + b);
    }
}
returnAnomyFunc();
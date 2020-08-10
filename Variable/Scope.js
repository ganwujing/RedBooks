/**
 * js没有块级作用域
 * 定义在if，for语句中的变量，在结束语句的时候不会被销毁
 * 解决这种问题的办法是使用let关键字
 */

if (true) {
    var a = 1;
}
console.log(a);

for (var i = 0; i < 10; i++) {
    let b = i;
}
console.log(i);

if (true) {
    let b = 1;
}
console.log(b); //报错
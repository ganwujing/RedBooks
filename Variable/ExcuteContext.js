//全局执行环境为window
console.log(this);
//定义全局和局部变量
var globalvar = "global"
defineLocal();

function defineLocal() {
    var localvar = "local";
    console.log(localvar);

    function localFunc() {
        var innervar = "inner"
        console.log(localvar);
    }
}


/**
 * 作用域链
 * 1.   innervar
 * 2.   localvar,localFunc
 * 3.   全局window,defineLocal,globalvar
 */
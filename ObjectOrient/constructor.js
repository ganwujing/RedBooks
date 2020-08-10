function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = sayName;
}

function sayName() {
    console.log(this.name);
}
var person1 = new Person("xj", 12);
person1.sayName();

/**
 * 1.new的时候发生了什么
 * 1.1  创建了一个新对象
 * 1.2  将构造函数的作用域赋给新的对象（this就指向新对象）
 * 1.3  执行构造函数的代码（为新对象添加属性）
 * 1.4  返回新对象
 */
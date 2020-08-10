function Person() {

}
Person.prototype.name = "hhh"
Person.prototype.sayName = function() {
    console.log(this.name)
}
console.log(Person.prototype);

/**
 * 1.   每个函数都有prototype属性，这个属性是一个指针，指向原型对象。
 * 2.   prototype通过调用构造函数来创建实例对象的原型对象。
 */
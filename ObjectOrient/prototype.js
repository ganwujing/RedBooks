function Person() {

}
Person.prototype={
    name:'hhh',
    sayName = function() {
        console.log(this.name)
    }
}
console.log(Person.prototype);
var person1=new Person();
person1.sayName();
console.log(person1.__proto__)

console.log(Person.prototype.constructor==Person)
console.log(person1.__proto__==Person.prototype)

console.log(person1.hasOwnProperty("name"));
person1.sayName=function(){
    console.log
}
console.log(person1.hasOwnProperty("sayName"));

/**
 * 1.   每个函数都有prototype属性，这个属性是一个指针，指向原型对象。
 * 2.   prototype通过调用构造函数来创建实例对象的原型对象。
 */



 /**in操作符
  * 1.  单独使用
  * 2.  for - in循环
  */
function Score(name,math,english){
    this.name=name;
    this.math=math;
    this.english=english;
}

Score.prototype.totalScore=function(){
    console.log(this.name+"的分数为"+this.math+this.english);
}
var score1=new Score('xj',90,100)
for(let score in score1){
    console.log(score);
    console.log(score1[score])
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    sayName: function() {
        console.log(this.name)
    },
    sayAge: function() {
        console.log(this.age)
    },
}

function SupPerson(name, age, gender) {
    this.gender = gender;
    //继承属性
    Person.call(this, name, age);

}
//继承方法
SupPerson.prototype = new Person();

//自己添加的方法要在继承方法后
SupPerson.prototype.sayGender = function() {
    console.log(this.gender)
}


var person1 = new SupPerson('hhhh', 12, 'male');
person1.sayName();
person1.sayGender();
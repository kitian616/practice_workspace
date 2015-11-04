// Javascript prototype test

var Person = function(name, sex){
    this.name = name;
    this.sex = sex;
}
Person.prototype.speak = function(words) { document.write(words); }

//_MAIN
document.write("<br>=== main ===");
var lilei = new Person("李雷", "M");
document.write("<br>" + lilei.name + "||"); //李雷
lilei.speak("Hi, I'm Li Lei!");//Hi, I'm Li Lei!
var hanmeimei = new Person("韩梅梅", "F");
document.write("<br>" + hanmeimei.name + "||"); //韩梅梅
hanmeimei.speak("Hi, I'm Han Meimei!");//Hi, I'm Han Meimei!

//_TEST1
document.write("<br><br>=== test1 ===");
document.write("<br>hanmeimei.__proto__: ");
document.write(hanmeimei.__proto__);
document.write("<br>hanmeimei.constructor: ");
document.write(hanmeimei.constructor);

document.write("<br><br>Person().__proto__: ");
document.write(Person.__proto__);
document.write("<br>Person().__proto__.__proto__: ");
document.write(Person.__proto__.__proto__);
document.write("<br>Person().__proto__.__proto__.__proto__: ");
document.write(Person.__proto__.__proto__.__proto__);

document.write("<br><br>Person().prototype: ");
document.write(Person.prototype);
document.write("<br>Person().constructor: ");
document.write(Person.constructor);
document.write("<br>Person().constructor.constructor: ");
document.write(Person.constructor.constructor);
document.write("<br>Person().prototype.constructor: ");
document.write(Person.prototype.constructor);
document.write("<br>Person().prototype.__proto__: ");
document.write(Person.prototype.__proto__);
document.write("<br>Person().prototype.__proto__.constructor: ");
document.write(Person.prototype.__proto__.constructor);
document.write("<br>Person().prototype.__proto__.constructor.constructor: ");
document.write(Person.prototype.__proto__.constructor.constructor);
document.write("<br>Person().prototype.__proto__.__proto__: ");
document.write(Person.prototype.__proto__.__proto__);

//_TEST2
//用来确定同一个对象
document.write("<br><br>=== test2 ===");
hanmeimei.__proto__.__proto__.test1 = function(){ document.write("test1!"); }
document.write("<br>" + Person.__proto__.__proto__.test1);
document.write("<br>" + Person.prototype.__proto__.test1);
document.write("<br>" + Object.test1);
document.write("<br>" + Person.prototype.test1);
document.write("<br>" + hanmeimei.__proto__.test1);

document.write("<br>");
hanmeimei.__proto__.test2 = function(){ document.write("test2!") }
document.write("<br>" + Person.prototype.test2);
document.write("<br>" + lilei.__proto__.test2);
document.write("<br>" + hanmeimei.__proto__.__proto__.test2);

document.write("<br>");
Person.prototype.__proto__.constructor.test3 = function(){
    document.write("test3!")
}

document.write("<br>" + Person.prototype.__proto__.constructor.test3);
document.write("<br>" + Person.prototype.__proto__.constructor.constructor.test3);

document.write("<br>");
Person.prototype.__proto__.constructor.constructor.test4 = function(){
    document.write("test4!")
}
document.write("<br>" + Person.constructor.test4);
document.write("<br>" + Person.constructor.constructor.test4);

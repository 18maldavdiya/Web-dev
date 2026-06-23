class student {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    study(){
        console.log(`${this.name} is studing js`);
    }
}
let s1 = new student("Hanish",21);
console.log(s1);
let s2= new student("Mansh",22);
console.log(s2);
s1.study();


//Inheritance

class Animal{
    sleep(){
        console.log("sleeping");
    }
    eat(){
        console.log(("eating"));
    }
}
class Dog extends Animal{
    bark(){
        console.log("Barking");
    }
}
const dog = new Dog();

dog.eat();
dog.sleep();
dog.bark();


class animal{
    constructor(name){
        this.name = name;
    }
}
class cat extends animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed =breed;
    }
}
const c = new cat("njhkoi","mn bhj");
console.log(c);
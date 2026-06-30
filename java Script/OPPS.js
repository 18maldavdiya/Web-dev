// class student {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     study(){
//         console.log(`${this.name} is studing js`);
//     }
// }
// let s1 = new student("Hanish",21);
// console.log(s1);
// let s2= new student("Mansh",22);
// console.log(s2);
// s1.study();


// //Inheritance

// class Animal{
//     sleep(){
//         console.log("sleeping");
//     }
//     eat(){
//         console.log(("eating"));
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Barking");
//     }
// }
// const dog = new Dog();

// dog.eat();
// dog.sleep();
// dog.bark();


// class animal{
//     constructor(name){
//         this.name = name;
//     }
// }
// class cat extends animal{
//     constructor(name,age,breed){
//         super(name,age);
//         this.breed =breed;
//     }
// }
// const c = new cat("njhkoi","mn bhj");
// console.log(c);

//Tasks 

//single Inheritence
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }

// const d = new Dog();
// d.eat();
// d.bark();

//multilevel Inheitence
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }

// class Puppy extends Dog {
//     weep() {
//         console.log("Weeping");
//     }
// }

// const p = new Puppy();
// const q = new Dog();

// p.eat();
// p.bark();
// p.weep();

//Hierarchical Inheritance
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {}
class Cat extends Animal {}

const d = new Dog();
const c = new Cat();

d.eat();
c.eat();

//
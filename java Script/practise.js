// // QUESTION 1
// let str = [
//     "gagan",
//     "ishan",
//     "yogesh"
// ];

// let result = str.map(name => name.toUpperCase());

// console.log(result);


// // QUESTION 2
// const products = [
//     { id: 1, name: "laptop" },
//     { id: 2, name: "phone" },
//     { id: 3, name: "tablet" }
// ];

// // Using normal function
// const q2 = products.map(function(product) {
//     return product.name;
// });

// // Using arrow function
// const q2arr = products.map(fproduct => fproduct.name);

// console.log(q2);
// console.log(q2arr);

// //QUESTION 3

// //QUESTION 4
// const users = [
//     { name: "A", age: 16 },
//     { name: "B", age: 22 },
//     { name: "C", age: 19 }
// ];

// const adults = users.filter(user => user.age >= 18);

// console.log(adults);

// // QUESTION 5
// const arr = ["hello", "world", "javascript"];

// const totalCharacters = arr.reduce((total, name) => total + name.length, 0);

// console.log(totalCharacters);

// //QUESTION 06
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = nums.filter(function(x) {
//     return x % 2 === 0;
// });

// const evendemo = nums.filter(x => x % 2 === 0).map(n => n * n);

// console.log(even);
// console.log(evendemo);

// const odd = nums.filter(x => x % 2 !== 0);

// console.log(odd);

// // QUESTION 7
// const employees = [
//     { name: "A", salary: 30000 },
//     { name: "B", salary: 50000 },
//     { name: "C", salary: 40000 }
// ];

// const sum = employees.reduce(function(total, emp) {
//     return total + emp.salary;
// }, 0);

// const sum2 = employees.reduce(
//     (total, emp) => total + emp.salary,
//     0
// );
// const sum3 = employees.reduce(
//     (total, emp) => total + emp.salary,
//     0
// );

// console.log(sum);
// console.log(sum2);
// console.log(sum3);
// //

//question 8
const students = [
    { names: "A", marks: 35 },
    { names: "B", marks: 45 },
    { names: "C", marks: 23 },
    { names: "D", marks: 23 }
];

const passStudents = students
    .filter(student => student.marks >= 33)
    .map(student => student.names);

console.log(passStudents);
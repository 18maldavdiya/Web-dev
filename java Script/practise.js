// // Question 1: Convert names to uppercase
// const names = ["gagan", "ishan", "yogesh"];

// const q1 = names.map(function(name) {
//     return name.toUpperCase();
// });

// console.log("Q1:", q1);


// // Question 2: Get product names
// const products1 = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Phone" },
//     { id: 3, name: "Tablet" }
// ];

// const q2 = products1.map(function(product) {
//     return product.name;
// });

// console.log("Q2:", q2);


// // Question 3: Filter words with length > 5
// const words1 = ["apple", "banana", "cat", "Elephant", "dog"];

// const q3 = words1.filter(function(word) {
//     return word.length > 5;
// });

// console.log("Q3:", q3);


// // Question 4: Filter users age > 18
// const users = [
//     { names: "A", age: 16 },
//     { names: "B", age: 19 },
//     { names: "C", age: 21 }
// ];

// const q4 = users.filter(function(user) {
//     return user.age > 18;
// });

// console.log("Q4:", q4);


// // Question 5: Total characters in words
// const words2 = ["hello", "world", "javascript"];

// const q5 = words2.reduce(function(total, word) {
//     return total + word.length;
// }, 0);

// console.log("Q5:", q5);


// // Question 6: Even numbers ka square
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const q6 = nums
//     .filter(function(num) {
//         return num % 2 === 0;
//     })
//     .map(function(num) {
//         return num * num;
//     });

// console.log("Q6:", q6);


// // Question 7: Total salary
// const employees = [
//     { names: "A", salary: 160000 },
//     { names: "B", salary: 19000 },
//     { names: "C", salary: 21000 }
// ];

// const q7 = employees.reduce(function(total, employee) {
//     return total + employee.salary;
// }, 0);

// console.log("Q7:", q7);


// // Question 8: Pass students names
// const students1 = [
//     { names: "A", marks: 35 },
//     { names: "B", marks: 45 },
//     { names: "C", marks: 23 },
//     { names: "D", marks: 23 }
// ];

// const q8 = students1
//     .filter(function(student) {
//         return student.marks >= 33;
//     })
//     .map(function(student) {
//         return student.names;
//     });

// console.log("Q8:", q8);


// // Question 9: Average marks
// const marks = [80, 90, 70, 60];

// const q9 =
//     marks.reduce(function(total, mark) {
//         return total + mark;
//     }, 0) / marks.length;

// console.log("Q9:", q9);


// // Question 10: Count fruit occurrences
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const q10 = fruits.reduce(function(occ, fruit) {
//     occ[fruit] = (occ[fruit] || 0) + 1;
//     return occ;
// }, {});

// console.log("Q10:", q10);


// // Question 11: Average >= 85, sort descending, return names
// const students2 = [{
//         name: "Utkarsh",
//         marks: [80, 90, 85]
//     },
//     {
//         name: "Yukta",
//         marks: [95, 92, 98]
//     },
//     {
//         name: "Navneet",
//         marks: [60, 70, 65]
//     }
// ];

// const q11 = students2
//     .map(function(student) {
//         return {
//             name: student.name,
//             avg: student.marks.reduce(function(total, mark) {
//                 return total + mark;
//             }, 0) / student.marks.length
//         };
//     })
//     .filter(function(student) {
//         return student.avg >= 85;
//     })
//     .sort(function(a, b) {
//         return b.avg - a.avg;
//     })
//     .map(function(student) {
//         return student.name;
//     });

// console.log("Q11:", q11);


// // Question 12: Group products by category
// const products2 = [
//     { name: "Laptop", category: "Electronics" },
//     { name: "Phone", category: "Electronics" },
//     { name: "Shirt", category: "Clothing" }
// ];

// const q12 = products2.reduce(function(acc, product) {
//     if (!acc[product.category]) {
//         acc[product.category] = [];
//     }

//     acc[product.category].push(product.name);
//     return acc;
// }, {});

// console.log("Q12:", q12)
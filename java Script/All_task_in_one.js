// TASK 1
//const students = [
//   { name: "John", marks: [80, 90, 85] },
//   { name: "Emma", marks: [95, 92, 98] }
// ];

// const studentAverages = students.map(student => {
//   const total = student.marks.reduce((sum, mark) => sum + mark, 0);
//   const average = total / student.marks.length;
//   return { name: student.name, average: parseFloat(average.toFixed(2)) };
// });

// console.log(studentAverages);

// TASK 2

const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Books", amount: 100 },
  { category: "Electronics", amount: 300 }
];

const totalRevenue = sales.reduce((sum, sale) => sum + sale.amount, 0);

console.log(totalRevenue); 

// TASK 3
const text = "The fox is quick. The fox is smart.";

const words = text.toLowerCase().replace(/[^a-z ]/g, "").split(" ");
const foxCount = words.filter(word => word === "fox").length;

console.log(foxCount); 
// Output: 2

// TASK 4
const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

const salaries = employees.map(emp => emp.salary);
const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);

console.log("Salaries:", salaries);     // 50000, 40000, 60000
console.log("Total Salary:", totalSalary); // 150000

//TASK 5
 const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 10 }
];

const availableProducts = products .filter(prod => prod.stock > 0)
                                    .map(prod => prod.name);

console.log(availableProducts); 
// 'Laptop', 'Tablet'

//TASK 6 
const posts = [
  { postid: 1, likes: 100 },
  { postid: 2, likes: 200 }
];

const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

console.log(totalLikes); 
//Output: 300

// TASK 7 
const movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 6.0 }
];

const highlyRated = movies
  .filter(movie => movie.rating > 8)
  .map(movie => movie.title);

console.log(highlyRated); // Movie A

// TASK 8
const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 }
];

const totalSpending = customers.reduce((sum, cust) => sum + cust.amount, 0);

console.log(totalSpending); // 70000

// TASK 9 
const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 500 }
];

const totalCredit = transactions
  .filter(tx => tx.type === "credit")
  .reduce((sum, tx) => sum + tx.amount, 0);

console.log(totalCredit); //  15000

//TASK 10 
const actions = [
  { user: "A", action: "login" },
  { user: "B", action: "logout" },
  { user: "C", action: "login" }
];

const loginCount = actions.filter(act => act.action === "login").length;

console.log(loginCount); 
//2

//TASK 11
const repos = [
  { repo: "A", stars: 100 },
  { repo: "B", stars: 200 }
];

const totalStars = repos.reduce((sum, repo) => sum + repo.stars, 0);

console.log(totalStars); 
// 300


//TASK 12
const storeProducts = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 }
];

const prices = storeProducts.map(prod => prod.price);
const highestPrice = Math.max(...prices);

console.log("Prices:", prices);   //50000, 20000, 15000
console.log("Highest Price:", highestPrice); //  50000

// TASK 13
const numbersList = [1, 2, 3, 4, 5, 6];

const squaredEvens = numbersList
  .filter(num => num % 2 === 0)
  .map(num => num ** 2);

console.log(squaredEvens); //  4, 16, 36 

// TASK 14
const marksList = [45, 80, 60, 90, 30];

const passingMarks = marksList.filter(mark => mark > 50);
const averagePassing = passingMarks.reduce((sum, mark) => sum + mark, 0) / passingMarks.length;

console.log(averagePassing); // 76.66666666666667

//TASSK 15
const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 500 }
];

const totalCartValue = cart.reduce((sum, item) => sum + item.price, 0);

console.log(totalCartValue); //  720

// TASK 16
const names = ["john", "emma", "alex"];

const upperCaseNames = names.map(name => name.toUpperCase());

console.log(upperCaseNames); //[ 'JOHN', 'EMMA', 'ALEX' ]


// TASK 17
const simpleNumbers = [10, 20, 30, 40];

const totalSum = simpleNumbers.reduce((sum, num) => sum + num, 0);

console.log(totalSum); // 100

// TASK 18
const users = [
  { name: "John", age: 25 },
  { name: "Emma", age: 16 },
  { name: "Alex", age: 20 }
];

const adultNames = users
  .filter(user => user.age >= 18)
  .map(user => user.name);

console.log(adultNames); // [ 'John', 'Alex' ]

// TASK 19
const discountProducts = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

const discountedPrices = discountProducts.map(prod => {
  return { name: prod.name, price: prod.price * 0.9 };
});

console.log(discountedPrices);
// [ { name: 'Laptop', price: 45000 },
//  { name: 'Phone', price: 18000 } ]

// TASK 20
const examResults = [
  { name: "John", marks: 80 },
  { name: "Emma", marks: 40 },
  { name: "Alex", marks: 70 }
];

const passingStudents = examResults
  .filter(student => student.marks >= 50)
  .map(student => student.name);

console.log(passingStudents); 
// [ 'John', 'Alex' ]
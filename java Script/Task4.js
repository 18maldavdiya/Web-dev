const employees = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 60000 }
];

// Extract salaries
const salaries = employees.map(emp => emp.salary);

// Total salary
const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);

console.log(salaries);
console.log(totalSalary);
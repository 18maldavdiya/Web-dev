const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 }
];

let totalSpending = 0;

for (let customer of customers) {
  totalSpending += customer.amount;
}

console.log(totalSpending);
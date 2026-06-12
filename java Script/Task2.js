const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Books", amount: 100 },
  { category: "Electronics", amount: 300 }
];

const totalRevenue = sales.reduce((total, sale) => {
  return total + sale.amount;
}, 0);

console.log(totalRevenue);
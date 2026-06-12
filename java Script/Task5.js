const products = [
    { name: "Laptop", stock: 5 },
    { name: "Phone", stock: 0 },
    { name: "Tablet", stock: 10 }
];

const availableProducts = products
    .filter(product => product.stock > 0)
    .map(product => product.name);

console.log(availableProducts);
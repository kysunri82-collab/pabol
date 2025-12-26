const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

const products = [
  { id: 1, product_name: "Laptop", price: 1200 },
  { id: 2, product_name: "Mouse", price: 25 }
];

app.get("/users", (req, res) => res.json(users));
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.json(user || { error: "User not found" });
});

app.get("/products", (req, res) => res.json(products));
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.json(product || { error: "Product not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

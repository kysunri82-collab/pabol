
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ----- MySQL Connection -----
const db = mysql.createConnection({
  host: "localhost",
  user: "leo",      
  password: "user123",       
  database: "paboldb"  
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// ----- ACTIVITY 4: GET METHODS -----
// Get all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get user by ID
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || { error: "User not found" });
  });
});

// Get all products
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get product by ID
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || { error: "Product not found" });
  });
});

// ----- ACTIVITY 5: POST METHODS -----
// Add new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Missing fields" });

  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: results.insertId, name, email });
  });
});

// Add new product
app.post("/products", (req, res) => {
  const { product_name, price } = req.body;
  if (!product_name || !price) return res.status(400).json({ error: "Missing fields" });

  db.query("INSERT INTO products (product_name, price) VALUES (?, ?)", [product_name, price], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: results.insertId, product_name, price });
  });
});

// ----- ACTIVITY 6: PUT METHODS -----
// Update user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User updated" });
  });
});

// Update product
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { product_name, price } = req.body;

  db.query("UPDATE products SET product_name = ?, price = ? WHERE id = ?", [product_name, price, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product updated" });
  });
});

// ----- ACTIVITY 7: DELETE METHODS -----
// Delete user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted" });
  });
});

// Delete product
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product deleted" });
  });
});

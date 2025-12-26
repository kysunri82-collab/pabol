const axios = require("axios");

// ----- ACTIVITY 3: GET a single user by ID -----
axios.get("http://localhost:3000/users/1")
  .then(res => console.log("Single user:", res.data))
  .catch(() => console.log("Error fetching user"));

// ----- ACTIVITY 4: GET a single product by ID -----
axios.get("http://localhost:3000/products/2")
  .then(res => console.log("Single product:", res.data))
  .catch(() => console.log("Error fetching product"));

// ----- ACTIVITY 5: POST a new user -----
axios.post("http://localhost:3000/users", { name: "Charlie", email: "charlie@example.com" })
  .then(res => console.log("New user added:", res.data))
  .catch(() => console.log("Error adding user"));

// ----- ACTIVITY 6: POST a new product -----
axios.post("http://localhost:3000/products", { product_name: "Keyboard", price: 50 })
  .then(res => console.log("New product added:", res.data))
  .catch(() => console.log("Error adding product"));

// ----- ACTIVITY 7: ERROR HANDLING EXAMPLES -----
axios.get("http://localhost:3000/users/999")
  .then(res => console.log(res.data))
  .catch(() => console.log("Handled error (user not found)"));

axios.get("http://localhost:3000/products/999")
  .then(res => console.log(res.data))
  .catch(() => console.log("Handled error (product not found)"));

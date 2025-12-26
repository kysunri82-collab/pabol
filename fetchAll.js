const axios = require("axios");


axios.get("http://localhost:3000/users/1")
  .then(res => console.log("Single user:", res.data))
  .catch(() => console.log("Error fetching user"));


axios.get("http://localhost:3000/products/2")
  .then(res => console.log("Single product:", res.data))
  .catch(() => console.log("Error fetching product"));

axios.post("http://localhost:3000/users", { name: "Charlie", email: "charlie@example.com" })
  .then(res => console.log("New user added:", res.data))
  .catch(() => console.log("Error adding user"));


axios.post("http://localhost:3000/products", { product_name: "Keyboard", price: 50 })
  .then(res => console.log("New product added:", res.data))
  .catch(() => console.log("Error adding product"));


axios.get("http://localhost:3000/users/999")
  .then(res => console.log(res.data))
  .catch(err => console.log("Handled error (user not found)"));

axios.get("http://localhost:3000/products/999")
  .then(res => console.log(res.data))
  .catch(err => console.log("Handled error (product not found)"));

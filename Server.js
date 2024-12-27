const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 80;
const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE,PATCH,OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api/e-commerce/users", userRoutes);
app.use("/api/e-commerce/products", productRoutes);

app.listen(port, () => {
  console.log(`Le serveur est démarré au port ${port}`);
});

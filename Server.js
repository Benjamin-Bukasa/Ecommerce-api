const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 80;
const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
app.use(express.json());

// middleware pour accepter les requêtes axios ou fetch faites sur http://localhost:5173
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE,PATCH,OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//middlewares pour créer les bases url de mes http
app.use("/api/e-commerce/users", userRoutes);
app.use("/api/e-commerce/products", productRoutes);

//Ecouter le port d'où mon server est démarrer
app.listen(port, () => {
  console.log(`Le serveur est démarré au port ${port}`);
});

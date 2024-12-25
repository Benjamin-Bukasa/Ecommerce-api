const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 80;
const app = express();
const Route = require("./routes/userRoutes");

app.use(express.json());

app.use("/api/e-commerce/users", Route);

app.listen(port, () => {
  console.log(`Le serveur est démarré au port ${port}`);
});

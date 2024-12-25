const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 80;
const app = express();

app.listen(port, () => {
  console.log(`Le serveur est démarré au port ${port}`);
});

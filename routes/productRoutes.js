const express = require("express");
const ProductRoutes = express.Router();
const {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/productControllers");

ProductRoutes.route("/").get(getProducts);
ProductRoutes.route("/:id").get(getProduct);
ProductRoutes.route("/").post(postProduct);
ProductRoutes.route("/:id").put(putProduct);
ProductRoutes.route("/:id").delete(deleteProduct);

module.exports = ProductRoutes;

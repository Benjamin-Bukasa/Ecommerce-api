const express = require("express");
const userRoutes = express.Router();
const {
  getUsers,
  getUser,
  postUser,
  putUser,
  patchUser,
  deleteUser,
} = require("../controllers/userControllers");

//route pour recupérer tous les utilisateurs
userRoutes.route("/").get(getUsers);

//route pour récuperer un utilisateur unique
userRoutes.route("/:id").get(getUser);

//route pour ajouter un utilisateur
userRoutes.route("/").post(postUser);

//route pour  modifier un utilisateur
userRoutes.route("/:id").put(putUser);

//route pour  modifier un utilisateur
userRoutes.route("/:id").patch(patchUser);

//route pour  supprimer un utilisateur
userRoutes.route("/:id").delete(deleteUser);

module.exports = userRoutes;

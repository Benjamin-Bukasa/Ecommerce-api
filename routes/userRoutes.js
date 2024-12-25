const express = require("express");
const Router = express.Router();
const {
  getUsers,
  getUser,
  postUser,
  putUser,
  patchUser,
  deleteUser,
} = require("../controllers/userControllers");

//route pour recupérer tous les utilisateurs
Router.route("/").get(getUsers);

//route pour récuperer un utilisateur unique
Router.route("/:id").get(getUser);

//route pour ajouter un utilisateur
Router.route("/").post(postUser);

//route pour  modifier un utilisateur
Router.route("/:id").put(putUser);

//route pour  modifier un utilisateur
Router.route("/:id").patch(patchUser);

//route pour  supprimer un utilisateur
Router.route("/:id").delete(deleteUser);

module.exports = Router;

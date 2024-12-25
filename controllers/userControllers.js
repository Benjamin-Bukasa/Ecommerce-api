//recupération de tous les utilisateurs
const getUsers = (req, res) => {
  res.status(200).json({ message: `Liste de tous les utilisateurs` });
};

//recupération d'un utilisateur unique
const getUser = (req, res) => {
  res.status(200).json({ message: `Utilisateur n° ${req.params.id} affiché` });
};

//ajout d'un nouvel utilisateur
const postUser = (req, res) => {
  res.status(200).json({ message: `un nouvel utilisateur ajouté` });
};

//modification des informations d'un utilisateur
const putUser = (req, res) => {
  res.status(200).json({
    message: `Informations de l'utilisateur n°${req.params.id} modifié`,
  });
};

//ajout d'une information à un utilisateur
const patchUser = (req, res) => {
  res.status(200).json({
    message: `Ajout des informations dans l'Utilisateur n°${req.params.id}`,
  });
};

//suppression d'un uilisateurs unique
const deleteUser = (req, res) => {
  res.status(200).json({ message: `Utilisateur n°${req.params.id} supprimé` });
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  putUser,
  patchUser,
  deleteUser,
};

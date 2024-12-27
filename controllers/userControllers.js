const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//recupération de tous les utilisateurs
const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany(); // Utilisation de Prisma pour récupérer les utilisateurs
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur lors de la récupération des utilisateurs",
    });
  }
};

//recupération d'un utilisateur unique
const getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    }); // Utilisation de Prisma pour trouver un utilisateur unique

    if (!user) {
      res
        .status(404)
        .json({ message: `L'utilisateur n°${req.params.id} n'existe pas` });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: `Erreur de serveur lors de la récupération de l'utilisateur`,
    });
  }
};

//ajout d'un nouvel utilisateur
const postUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res
      .status(201)
      .json({ message: "Utilisateur ajouté avec succès", user: newUser });
  } catch (error) {
    res.status(400).json({
      message: "Erreur lors de l'ajout de l'utilisateur",
      error: error.message,
    });
  }
};

//modification des informations d'un utilisateur
const putUser = async (req, res) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: req.params.id },
      data: req.body,
    });

    res.status(200).json({
      message: `Utilisateur n°${req.params.id} modifié`,
      user: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Erreur lors de la mise à jour de l'utilisateur",
      error: error.message,
    });
  }
};

//ajout d'une information à un utilisateur
const patchUser = async (req, res) => {
  const { id } = req.params; // ID de l'utilisateur (passé dans l'URL)
  const { city, district, quarter, township, street, parcelNumber, phone } =
    req.body;

  try {
    // Vérifiez si l'utilisateur existe
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: `Utilisateur n°${id} introuvable.` });
    }

    // Ajoutez une nouvelle adresse pour cet utilisateur
    const userAddress = await prisma.address.create({
      data: {
        userId: id,
        city,
        district,
        quarter,
        township,
        street,
        parcelNumber,
        phone,
      },
    });

    res.status(200).json({
      message: `L'adresse de l'utilisateur n°${id} a été ajoutée.`,
      address: userAddress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de l'ajout de l'adresse.",
      error: error.message,
    });
  }
  //676dff681c68fef64e896ec7
  // res.status(200).json({
  //   message: `Ajout des informations dans l'Utilisateur n°${req.params.id}`,
  // });
};

//suppression d'un uilisateurs unique
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Utilisateur n°${req.params.id} supprimé`,
      user: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur lors de la suppression de l'utilisateur",
      error: error.message,
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  putUser,
  patchUser,
  deleteUser,
};

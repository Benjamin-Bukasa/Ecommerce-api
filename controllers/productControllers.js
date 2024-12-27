const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Recuperer la liste de tous les produits
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMay();
    res.status(200).json(products);
  } catch (error) {
    console.error("Erreur lors de la récuperation du produit", error);
  }
};

//Recupérer un produit unique
const getProduct = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (!product) {
      res
        .status(400)
        .json({ message: `Le produit n°${req.params.id} n'a pas été trouvé` });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Erreur lors de la récupération du produit");
  }
};

//Ajouter un produit
const postProduct = async (req, res) => {
  try {
    const { productName, productQty, productPrice, productDetail } = req.body;

    // Vérifiez que toutes les données requises sont présentes
    if (!productName || !productQty || !productPrice || !productDetail) {
      return res
        .status(400)
        .json({ message: "Veuillez remplir tous les champs requis." });
    }

    // Vérifiez que la quantité est valide
    if (productQty < 1) {
      return res
        .status(400)
        .json({ message: "La quantité doit être au moins 1." });
    }

    // Ajoutez le produit
    const product = await prisma.product.create({
      data: {
        productName,
        productQty,
        productPrice,
        productDetail,
        productStocked: true,
      },
    });

    res.status(200).json({
      message: `Le produit ${productName} a été ajouté avec succès.`,
      product,
    });
  } catch (error) {
    console.error("Erreur du serveur lors de l'ajout du produit", error);
    res.status(500).json({
      message: "Erreur serveur lors de l'ajout du produit",
      error: error.message,
    });
  }
};

//Modifier un produit
const putProduct = async (req, res) => {
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: req.params.id },
      data: req.body,
    });

    res.status(200).json({
      message: `Le produit n°${req.params.id} a été modifié`,
      user: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: "Erreur lors de la mise à jour de l'utilisateur",
      error: error.message,
    });
  }
};

//Supprimer un produit
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Le produit n°${req.params.id} supprimé`,
      user: deleteProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur lors de la suppression du produit",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};

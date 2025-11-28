const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/**
 * Get all matieres
 * @returns {Promise<Matiere[]>} all matieres
 */
exports.getAllMatieres = async () => {
  return await prisma.matiere.findMany();
};

/**
 * Get a matiere by id
 * @param {string} id - id of the matiere
 * @returns {Promise<Matiere>} the matiere
 */
exports.getMatiereById = async (id) => {
  return await prisma.matiere.findUnique({
    where: { id: id },
  });
};

/**
 * Create a new matiere
 * @param {Matiere} matiere - the matiere to create
 * @returns {Promise<Matiere>} the created matiere
 */
exports.createMatiere = async (matiere) => {
  return await prisma.matiere.create({
    data: {
      nom: matiere.nom,
    },
  });
};

/**
 * Update a matiere
 * @param {string} id - id of the matiere to update
 * @param {Matiere} matiere - the matiere to update
 * @returns {Promise<Matiere>} the updated matiere
 */
exports.updateMatiere = async (id, matiere) => {
  return await prisma.matiere.update({
    where: { id: id },
    data: {
      nom: matiere.nom,
    },
  });
};

/**
 * Delete a matiere
 * @param {string} id - id of the matiere to delete
 * @returns {Promise<boolean>} true if the matiere was deleted, false if it was not found
 */
exports.deleteMatiere = async (id) => {
  try {
    await prisma.matiere.delete({
      where: { id: id },
    });
    return true;
  } catch (error) {
    if (error.code === "P2025") {
      return false;
    }
    throw error;
  }
};

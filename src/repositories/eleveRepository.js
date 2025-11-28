const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/**
 * @function getAllEleves
 * @description Retrieve all eleves from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of eleves.
 */
exports.getAllEleves = async () => {
  return await prisma.eleve.findMany();
};

/**
 * @function getAllElevesByClasse
 * @description Retrieve all eleves from the database ordered by classeId.
 * @returns {Promise<Array>} A promise that resolves to an array of eleves.
 */
exports.getAllElevesByClasse = async () => {
  return await prisma.eleve.findMany({
    orderBy: { classeId: "asc" },
  });
};

/**
 * @function getAllElevesOfClasse
 * @description Retrieve all eleves from the database that belong to the given classeId.
 * @param {string} classeId The ID of the classe to retrieve the eleves from.
 * @returns {Promise<Array>} A promise that resolves to an array of eleves.
 */
exports.getAllElevesOfClasse = async (classeId) => {
  return await prisma.eleve.findMany({
    where: { classeId: classeId },
  });
};

/**
 * @function getEleveById
 * @description Retrieve a single eleve from the database by its ID.
 * @param {string} id The ID of the eleve to retrieve.
 * @returns {Promise<eleve>} A promise that resolves to a single eleve.
 */
exports.getEleveById = async (id) => {
  return await prisma.eleve.findUnique({
    where: { id: id },
  });
};

/**
 * @function createEleve
 * @description Create a new eleve in the database.
 * @param {Object} eleve The eleve to create.
 * @returns {Promise<eleve>} A promise that resolves to the created eleve.
 */
exports.createEleve = async (eleve) => {
  return await prisma.eleve.create({
    data: {
      nom: eleve.nom,
      prenom: eleve.prenom,
      classeId: eleve.classeId,
      dateNaissance: eleve.dateNaissance,
      adresse: eleve.adresse,
      sexe: eleve.sexe,
    },
  });
};

/**
 * @function updateEleve
 * @description Update an existing eleve in the database.
 * @param {string} id The ID of the eleve to update.
 * @param {Object} eleve The updated eleve.
 * @returns {Promise<eleve>} A promise that resolves to the updated eleve.
 */
exports.updateEleve = async (id, eleve) => {
  return await prisma.eleve.update({
    where: { id: id },
    data: {
      nom: eleve.nom,
      prenom: eleve.prenom,
      classeId: eleve.classeId,
      dateNaissance: eleve.dateNaissance,
      adresse: eleve.adresse,
      sexe: eleve.sexe,
    },
  });
};

/**
 * @function deleteEleve
 * @description Delete an existing eleve from the database.
 * @param {string} id The ID of the eleve to delete.
 * @returns {Promise<boolean>} A promise that resolves to true if the eleve was deleted and false if it was not found.
 */
exports.deleteEleve = async (id) => {
  try {
    await prisma.eleve.delete({
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

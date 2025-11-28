const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * Repository pour la ressource Classe.
 * Encapsule toutes les opérations d'accès à la base via Prisma.
 *
 * @module repositories/classeRepository
 */

/**
 * Récupère toutes les classes en base.
 *
 * @async
 * @returns {Promise<Array<Object>>} Liste de toutes les classes.
 */
exports.getAllClasse = async () => {
  return await prisma.classe.findMany();
};

/**
 * Récupère une classe par son identifiant.
 *
 * @async
 * @param {number|string} id - Identifiant unique de la classe.
 * @returns {Promise<Object|null>} La classe trouvée, ou `null` si aucune classe ne correspond.
 */
exports.getClasseById = async (id) => {
  return await prisma.classe.findUnique({
    where: { id: id },
  });
};

/**
 * Crée une nouvelle classe.
 *
 * @async
 * @param {{ nom: string, profId: number|null }} classe - Données de la classe à créer.
 * @returns {Promise<Object>} La classe créée.
 */
exports.createClasse = async (classe) => {
  return await prisma.classe.create({
    data: {
      nom: classe.nom,
      profId: classe.profId,
    },
  });
};

/**
 * Met à jour une classe existante.
 *
 * @async
 * @param {{ id: number|string, nom?: string, profId?: number|null }} classe - Données mises à jour, incluant l'ID de la classe.
 * @returns {Promise<Object>} La classe mise à jour.
 * @throws {Error} Si la classe n'existe pas (erreur Prisma P2025).
 */
exports.updateClasse = async (classe) => {
  return await prisma.classe.update({
    where: { id: classe.id },
    data: {
      nom: classe.nom,
      profId: classe.profId,
    },
  });
};

/**
 * Supprime une classe à partir de son identifiant.
 *
 * @async
 * @param {number|string} id - Identifiant de la classe à supprimer.
 * @returns {Promise<boolean>} `true` si la classe a été supprimée, `false` si aucune classe ne correspond.
 * @throws {Error} Toute erreur autre que P2025 est relancée.
 */
exports.deleteClasse = async (id) => {
  try {
    await prisma.classe.delete({
      where: { id: id },
    });
    return true;
  } catch (error) {
    if (error.code === 'P2025') {
      return false;
    }
    throw error;
  }
};

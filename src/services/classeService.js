const classeRepository = require('../repositories/classeRepository');

/**
 * Service métier pour la ressource Classe.
 * Contient la logique de validation et d'orchestration autour du repository.
 *
 * @module services/classeService
 */

/**
 * Récupère toutes les classes.
 *
 * @async
 * @returns {Promise<Array<Object>>} Liste de toutes les classes.
 */
exports.getAllClasse = async () => {
  return await classeRepository.getAllClasse();
};

/**
 * Récupère une classe par son identifiant.
 *
 * @async
 * @param {number|string} id - Identifiant unique de la classe.
 * @returns {Promise<Object|null>} La classe trouvée ou `null` si aucune classe ne correspond.
 */
exports.getClasseById = async (id) => {
  return await classeRepository.getClasseById(id);
};

/**
 * Crée une nouvelle classe après validation minimale des données.
 *
 * Règles :
 * - `classe.nom` doit être défini.
 * - `classe.profId` ne doit pas être `null` ou `undefined`.
 *
 * @async
 * @param {{ nom?: string, profId?: number|null }} classe - Données de la classe à créer.
 * @returns {Promise<Object|null>} La classe créée, ou `null` si les données sont invalides.
 */
exports.createClasse = async (classe) => {
  if (!classe.nom || classe.profId === null || classe.profId === undefined) return null;

  return await classeRepository.createClasse({ ...classe, profId: classe.profId });
};

/**
 * Met à jour une classe existante.
 *
 * Construit un payload incluant l'ID et les champs à mettre à jour.
 * Si `classe.profId` est fourni, il est explicitement recopié.
 *
 * @async
 * @param {number|string} id - Identifiant de la classe à mettre à jour.
 * @param {{ nom?: string, profId?: number|null }} classe - Données à mettre à jour.
 * @returns {Promise<Object>} La classe mise à jour.
 */
exports.updateClasse = async (id, classe) => {
  const updatedPayload = { ...classe, id: id };
  if (classe.profId !== undefined) {
    updatedPayload.profId = classe.profId;
  }

  return await classeRepository.updateClasse(updatedPayload);
};

/**
 * Supprime une classe à partir de son identifiant.
 *
 * @async
 * @param {number|string} id - Identifiant de la classe à supprimer.
 * @returns {Promise<boolean>} `true` si la classe a été supprimée, `false` si elle n'existait pas.
 */
exports.deleteClasse = async (id) => {
  return await classeRepository.deleteClasse(id);
};

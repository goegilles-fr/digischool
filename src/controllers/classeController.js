const classeService = require('../services/classeService');

/**
 * Contrôleurs HTTP pour la ressource Classe.
 * Toutes les fonctions exposées ici sont destinées à être utilisées
 * comme handlers Express dans les routes liées aux classes.
 *
 * @module controllers/classeController
 */

/**
 * Récupère la liste de toutes les classes et renvoie le résultat en JSON.
 *
 * Codes de réponse :
 * - 200 : Tableau de classes sérialisé en JSON.
 *
 * @async
 * @param {Request} request - Requête HTTP entrante.
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.getAllClasse = async (request, response) => {
  const classeList = await classeService.getAllClasse();
  response.status(200).json(classeList);
};

/**
 * Récupère une classe par son identifiant et renvoie le résultat en JSON.
 *
 * Codes de réponse :
 * - 200 : Classe trouvée, renvoyée en JSON.
 * - 404 : Aucune classe ne correspond à l'identifiant fourni.
 *
 * @async
 * @param {Request} request - Requête contenant l'identifiant de la classe (`request.params.id`).
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.getClasseById = async (request, response) => {
  const classe = await classeService.getClasseById(request.params.id);
  if (classe) response.status(200).json(classe);
  else response.status(404).json({ message: "Classe non trouvée" });
};

/**
 * Crée une nouvelle classe à partir du corps de la requête.
 *
 * Le corps de la requête doit contenir les données nécessaires
 * à la création de la classe (nom, profId, etc.).
 *
 * Codes de réponse :
 * - 201 : Classe créée, renvoyée en JSON.
 * - 400 : Données invalides.
 * - 500 : Erreur interne lors de la création.
 *
 * @async
 * @param {Request} request - Requête contenant les données de la classe dans `request.body`.
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.createClasse = async (request, response) => {
  try {
    const classe = await classeService.createClasse(request.body);
    if (classe) response.status(201).json(classe);
    else response.status(400).json({ message: "Données invalides" });
  } catch (error) {
    response.status(500).json({ message: "Erreur lors de la création de la classe" });
  }
};

/**
 * Met à jour une classe existante à partir de son identifiant et des
 * nouvelles données fournies dans le corps de la requête.
 *
 * Codes de réponse :
 * - 200 : Classe mise à jour, renvoyée en JSON.
 * - 404 : Classe non trouvée.
 * - 500 : Erreur interne lors de la mise à jour.
 *
 * @async
 * @param {Request} request - Requête contenant l'identifiant (`request.params.id`) et les nouvelles données (`request.body`).
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.updateClasse = async (request, response) => {
  try {
    const classe = await classeService.updateClasse(request.params.id, request.body);
    if (classe) response.status(200).json(classe);
    else response.status(404).json({ message: "Classe non trouvée" });
  } catch (error) {
    response.status(500).json({ message: "Erreur lors de la mise à jour de la classe" });
  }
};

/**
 * Supprime une classe à partir de son identifiant.
 *
 * Codes de réponse :
 * - 204 : Classe supprimée avec succès (aucun contenu renvoyé).
 * - 404 : Classe non trouvée.
 * - 500 : Erreur interne lors de la suppression.
 *
 * @async
 * @param {Request} request - Requête contenant l'identifiant de la classe à supprimer (`request.params.id`).
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.deleteClasse = async (request, response) => {
  try {
    const deleted = await classeService.deleteClasse(request.params.id);
    if (deleted) response.sendStatus(204);
    else response.status(404).json({ message: "Classe non trouvée" });
  } catch (error) {
    response.status(500).json({ message: "Erreur lors de la suppression de la classe" });
  }
};

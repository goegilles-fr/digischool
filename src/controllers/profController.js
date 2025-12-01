const profService = require('../services/profService');

/**
 * Contrôleurs HTTP pour la ressource Prof.
 * Toutes les fonctions exposées ici sont destinées à être utilisées
 * comme handlers Express dans les routes liées aux professeurs.
 *
 * @module controllers/profController
 */

/**
 * Récupère la liste de tous les professeurs et renvoie le résultat en JSON.
 *
 * Codes de réponse :
 * - 200 : Tableau de professeurs sérialisé en JSON.
 *
 * @async
 * @param {Request} request - Requête HTTP entrante.
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.getAllProf = async (request, response) => {
    const profList = await profService.getAllProf();
    response.status(200).json(profList);
};

/**
 * Récupère un professeur par son identifiant et renvoie le résultat en JSON.
 *
 * Codes de réponse :
 * - 200 : Professeur trouvé, renvoyé en JSON.
 * - 404 : Aucun professeur correspondant à l'identifiant fourni.
 *
 * @async
 * @param {Request} request - Requête HTTP contenant l'identifiant du prof (`request.params.id`).
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.getProfById = async (request, response) => {
    const prof = await profService.getProfById(request.params.id);
    if (prof) response.status(200).json(prof);
    else response.status(404).json({ message: "Prof non trouvé" });
};

/**
 * Récupère le professeur associé à une classe via son identifiant de classe.
 *
 * Codes de réponse :
 * - 200 : Professeur trouvé pour la classe, renvoyé en JSON.
 * - 404 : Aucun professeur associé à cette classe ou classe inexistante.
 *
 * @async
 * @param {Request} request - Requête HTTP contenant l’identifiant de la classe (`request.params.classeId`).
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.getProfByClasseId = async (request, response) => {
    const prof = await profService.getProfByClasseId(request.params.classeId);
    if (prof) response.status(200).json(prof);
    else response.status(404).json({ message: 'Prof non trouvé' });
};

/**
 * Crée un nouveau professeur à partir du corps de la requête.
 *
 * Le corps de la requête doit contenir les données nécessaires
 * à la création du professeur (nom, prénom, etc.).
 *
 * Codes de réponse :
 * - 201 : Professeur créé, renvoyé en JSON.
 * - 400 : Données invalides (validation côté service ou repository).
 * - 500 : Erreur interne lors de la création.
 *
 * @async
 * @param {Request} request - Requête HTTP contenant les données du prof dans `request.body`.
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.createProf = async (request, response) => {
    try {
        const prof = await profService.createProf(request.body);
        if (prof) response.status(201).json(prof);
        else response.status(400).json({ message: "Données invalides" });
    } catch (error) {
        response.status(500).json({ message: "Erreur lors de la création du prof" });
    }
};

/**
 * Met à jour un professeur existant à partir de son identifiant et des
 * nouvelles données fournies dans le corps de la requête.
 *
 * Codes de réponse :
 * - 200 : Professeur mis à jour, renvoyé en JSON.
 * - 404 : Professeur non trouvé pour l'identifiant fourni.
 * - 500 : Erreur interne lors de la mise à jour.
 *
 * @async
 * @param {Request} request - Requête HTTP contenant l’identifiant du prof (`request.params.id`) et les nouvelles données dans `request.body`.
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.updateProf = async (request, response) => {
    try {
        const prof = await profService.updateProf(request.params.id, request.body);
        if (prof) response.status(200).json(prof);
        else response.status(404).json({ message: "Prof non trouvé" });
    } catch (error) {
        response.status(500).json({ message: "Erreur lors de la mise à jour du prof" });
    }
};

/**
 * Supprime un professeur à partir de son identifiant.
 *
 * Codes de réponse :
 * - 204 : Professeur supprimé avec succès (aucun contenu renvoyé).
 * - 404 : Professeur non trouvé pour l'identifiant fourni.
 * - 500 : Erreur interne lors de la suppression.
 *
 * @async
 * @param {Request} request - Requête HTTP contenant l’identifiant du prof à supprimer (`request.params.id`).
 * @param {Response} response - Objet de réponse HTTP.
 * @returns {Promise<void>} Envoie la réponse HTTP.
 */
exports.deleteProf = async (request, response) => {
    try {
        const deleted = await profService.deleteProf(request.params.id);
        if (deleted) response.sendStatus(204);
        else response.status(404).json({ message: "Prof non trouvé" });
    } catch (error) {
        response.status(500).json({ message: "Erreur lors de la suppression du prof" });
    }
};

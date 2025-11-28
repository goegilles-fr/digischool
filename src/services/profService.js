const profRepository = require('../repositories/profRepository');

/**
 * Récupère la liste de tous les professeurs.
 *
 * @async
 * @returns {Promise<Array<Object>>} Une promesse résolue avec un tableau de professeurs.
 */
exports.getAllProf = async () => {
    return await profRepository.getAllProf();
}

/**
 * Récupère un professeur par son identifiant.
 *
 * @async
 * @param {string} id - Identifiant du professeur (ObjectId sous forme de chaîne).
 * @returns {Promise<Object|null>} Une promesse résolue avec le professeur trouvé,
 * ou `null` s'il n'existe pas.
 */
exports.getProfById = async (id) => {
    return await profRepository.getProfById(id);
}

/**
 * Récupère le professeur affecté à une classe donnée.
 *
 * @async
 * @param {string} classeID - Identifiant de la classe (ObjectId sous forme de chaîne).
 * @returns {Promise<Object|null>} Une promesse résolue avec le professeur affecté,
 * ou `null` si la classe ou le professeur n'existent pas.
 */
exports.getProfByClasseId = async (classeID) => {
    return await profRepository.getProfByClasseId(classeID);
}

/**
 * Crée un nouveau professeur.
 *
 * Effectue une validation minimale (nom et prénom obligatoires)
 * avant de déléguer au repository.
 *
 * @async
 * @param {Object} prof - Données du professeur à créer.
 * @param {string} prof.nom - Nom du professeur.
 * @param {string} prof.prenom - Prénom du professeur.
 * @param {string} [prof.dateNaissance] - Date de naissance (ex. "YYYY-MM-DD").
 * @param {string} [prof.adresse] - Adresse postale.
 * @param {string} [prof.sexe] - Sexe du professeur ("M", "F", "Autre", etc.).
 * @returns {Promise<Object|null>} Une promesse résolue avec le professeur créé,
 * ou `null` si les données minimales sont invalides.
 */
exports.createProf = async (prof) => {
    if (!prof.nom || !prof.prenom) return null;
    return await profRepository.createProf(prof);
}

/**
 * Met à jour un professeur existant.
 *
 * @async
 * @param {string} id - Identifiant du professeur à mettre à jour.
 * @param {Object} prof - Données mises à jour du professeur.
 * @returns {Promise<Object>} Une promesse résolue avec le professeur mis à jour.
 */
exports.updateProf = async (id, prof) => {
    return await profRepository.updateProf({ ...prof, id: id });
}

/**
 * Supprime un professeur par son identifiant.
 *
 * @async
 * @param {string} id - Identifiant du professeur à supprimer.
 * @returns {Promise<void|Object>} Une promesse résolue lorsque la suppression est effectuée.
 * Selon l’implémentation du repository, peut éventuellement renvoyer le professeur supprimé ou un résultat.
 */
exports.deleteProf = async (id) => {
    return await profRepository.deleteProf(id);
}
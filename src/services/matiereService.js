const matiereRepository = require('../repositories/matiereRepository');
/**
 * Matiere service
 * @module MatiereService
 */
const matiereRepository = require('../repositories/matiereRepository');

/**
 * Get all matieres
 * @function
 * @returns {Promise<Matiere[]>} list of matieres
 */
exports.getAllMatieres = async () => {
    const matieres = await matiereRepository.getAllMatieres();
    return matieres;
};

/**
 * Get a matiere by id
 * @function
 * @param {string} id - id of the matiere
 * @returns {Promise<Matiere>} matiere
 */
exports.getMatiereById = async (id) => {
    const matiere = await matiereRepository.getMatiereById(id);
    return matiere;
};

/**
 * Create a new matiere
 * @function
 * @param {Matiere} datas - data of the matiere to create
 * @returns {Promise<Matiere>} created matiere
 */
exports.createMatiere = async (datas) => {
    const createdMatiere = await matiereRepository.createMatiere(datas);
    return createdMatiere;
};

/**
 * Update a matiere
 * @function
 * @param {string} id - id of the matiere to update
 * @param {Matiere} datas - data of the matiere to update
 * @returns {Promise<Matiere>} updated matiere
 */
exports.updateMatiere = async (id, datas) => {
    const updatedMatiere = await matiereRepository.updateMatiere(id, datas);
    return updatedMatiere;
};

/**
 * Delete a matiere
 * @function
 * @param {string} id - id of the matiere to delete
 * @returns {Promise<boolean>} true if the matiere was deleted, false if it was not found
 */
exports.deleteMatiere = async (id) => {
    const deletedMatiere = await matiereRepository.deleteMatiere(id);
    return deletedMatiere;
};

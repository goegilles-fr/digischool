/**
 * Service for managing trimestres.
 *
/** @type {Object} 
 */
const trimestreRepository = require('../repositories/trimestreRepository');

/**
 * Return all trimestres.
 * @returns {Promise<Array>} Promise resolving to an array of trimestre objects.
 */
exports.getAllTrimestres = async () => {
    const trimestres = await trimestreRepository.getAllTrimestres();
    return trimestres;
};

/**
 * Return a trimestre by ID.
 * @param {number|string} id - Trimester ID.
 * @returns {Promise<Object|null>} Promise resolving to the trimestre or null if not found.
 */
exports.getTrimestreById = async (id) => {
    const trimestre = await trimestreRepository.getTrimestreById(id);
    return trimestre;
};

/**
 * Create a new trimestre.
 * @param {Object} datas - Incoming trimestre data (expects `nom` and `date`).
 * @returns {Promise<Object>} Promise resolving to the created trimestre object.
 */
exports.createTrimestre = async (datas) => {
   
    const trimestre = {
        nom: datas.nom,
        date: new Date(datas.date)
    };
    const createdTrimestre = await trimestreRepository.createTrimestre(trimestre);
    return createdTrimestre;
};

/**
 * Update an existing trimestre by ID.
 * @param {number|string} id - Trimester ID to update.
 * @param {Object} datas - Updated trimestre data.
 * @returns {Promise<Object>} Promise resolving to the updated trimestre object.
 */
exports.updateTrimestre = async (id, datas) => {
 
    const trimestre = {
        nom: datas.nom,
        date: new Date(datas.date)
    };
    const updatedTrimestre = await trimestreRepository.updateTrimestre(id, trimestre);
    return updatedTrimestre;
};

/**
 * Delete a trimestre by ID.
 * @param {number|string} id - Trimester ID to delete.
 * @returns {Promise<Object>} Promise resolving to the deleted trimestre record.
 */
exports.deleteTrimestre = async (id) => {
    const deletedTrimestre = await trimestreRepository.deleteTrimestre(id);
    return deletedTrimestre;
};
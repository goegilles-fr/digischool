const eleveRepository = require('../repositories/eleveRepository');

/**
 * @function getAllEleves
 * @description Retrieve all eleves from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of eleves.
 */
exports.getAllEleves = async () => {
    const eleves = await eleveRepository.getAllEleves();
    return eleves;
};

/**
 * @function getAllElevesByClasse
 * @description Retrieve all eleves from the database ordered by classeId.
 * @returns {Promise<Array>} A promise that resolves to an array of eleves.
 */
exports.getAllElevesByClasse = async () => {
    const eleves = await eleveRepository.getAllElevesByClasse();
    return eleves;
};

/**
 * @function getAllElevesOfClasse
 * @description Retrieve all eleves from the database that belong to the given classeId.
 * @param {string} classeId The ID of the classe to retrieve the eleves from.
 * @returns {Promise<Array>} A promise that resolves to an array of eleves.
 */
exports.getAllElevesOfClasse = async (classeId) => {
    const eleves = await eleveRepository.getAllElevesOfClasse(classeId);
    return eleves;
};

/**
 * @function getEleveById
 * @description Retrieve an eleve from the database by its ID.
 * @param {string} id The ID of the eleve to retrieve.
 * @returns {Promise<eleve>} A promise that resolves to the eleve.
 */
exports.getEleveById = async (id) => {
    const eleve = await eleveRepository.getEleveById(id);
    return eleve;
};

/**
 * @function createEleve
 * @description Create a new eleve in the database.
 * @param {Object} datas The data of the eleve to create.
 * @returns {Promise<eleve>} A promise that resolves to the created eleve.
 */
exports.createEleve = async (datas) => {
    const createdEleve = await eleveRepository.createEleve(datas);
    return createdEleve;
};

/**
 * @function updateEleve
 * @description Update an existing eleve in the database.
 * @param {string} id The ID of the eleve to update.
 * @param {Object} datas The updated data of the eleve.
 * @returns {Promise<eleve>} A promise that resolves to the updated eleve.
 */
exports.updateEleve = async (id, datas) => {
    const updatedEleve = await eleveRepository.updateEleve(id, datas);
    return updatedEleve;
};

/**
 * @function deleteEleve
 * @description Delete an eleve from the database by its ID.
 * @param {string} id The ID of the eleve to delete.
 * @returns {Promise<eleve>} A promise that resolves to the deleted eleve.
 */
exports.deleteEleve = async (id) => {
    const deletedEleve = await eleveRepository.deleteEleve(id);
    return deletedEleve;
};

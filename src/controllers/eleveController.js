const eleveService = require('../services/eleveService');

/**
 * @function getAllEleves
 * @description Retrieve all eleves from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of eleves.
 */
exports.getAllEleves = async (req, res) => {
    const eleves = await eleveService.getAllEleves();
    res.status(200).json(eleves);
}

/**
 * @function getAllElevesByClasse
 * @description Retrieve all eleves from the database ordered by classeId.
 * @returns {Promise<Array>} A promise that resolves to an array of eleves.
 */
exports.getAllElevesByClasse = async (req, res) => {
    const eleves = await eleveService.getAllElevesByClasse();
    res.status(200).json(eleves);
}

/**
 * @function getAllElevesOfClasse
 * @description Retrieve all eleves from the database that belong to the given classeId.
 * @param {string} id The ID of the classe to retrieve the eleves from.
 * @returns {Promise<Array>} A promise that resolves to an array of eleves.
 */
exports.getAllElevesOfClasse = async (req, res) => {
    const id = req.params.id;
    const eleves = await eleveService.getAllElevesOfClasse(id);
    res.status(200).json(eleves);
}

/**
 * @function getEleveById
 * @description Retrieve an eleve from the database by ID.
 * @param {string} id The ID of the eleve to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the retrieved eleve.
 */
exports.getEleveById = async (req, res) => {
    const id = req.params.id;
    const eleve = await eleveService.getEleveById(id);
    res.status(200).json(eleve);
}

/**
 * @function createEleve
 * @description Create a new eleve in the database.
 * @param {Object} eleve The eleve to create.
 * @returns {Promise<Object>} A promise that resolves to the created eleve.
 */
exports.createEleve = async (req, res) => {
    const eleve = req.body;
    const createdEleve = await eleveService.createEleve(eleve);
    res.status(201).json(createdEleve);
}

/**
 * @function updateEleve
 * @description Update an existing eleve in the database.
 * @param {string} id The ID of the eleve to update.
 * @param {Object} eleve The updated data of the eleve.
 * @returns {Promise<Object>} A promise that resolves to the updated eleve.
 */
exports.updateEleve = async (req, res) => {
    const id = req.params.id;
    const eleve = req.body;
    const updatedEleve = await eleveService.updateEleve(id, eleve);
    res.status(200).json(updatedEleve);
}

/**
 * @function deleteEleve
 * @description Delete an eleve from the database.
 * @param {string} id The ID of the eleve to delete.
 * @returns {Promise<Object>} A promise that resolves to the deleted eleve.
 */
exports.deleteEleve = async (req, res) => {
    const id = req.params.id;
    const deletedEleve = await eleveService.deleteEleve(id);
    res.status(200).json(deletedEleve);
}


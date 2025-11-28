/**
 * Controller for managing trimestres.
 *
 * @type {*}
 */
const trimestreService = require('../services/trimestreService');

/**
 * Retrieve all trimestres.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON array of trimestres with status 200 on success.
 */
exports.getAllTrimestres = async (req, res) => {
    const trimestres = await trimestreService.getAllTrimestres();
    res.status(200).json(trimestres);
}

/**
 * Retrieve a single trimestre by its ID.
 * @param {Object} req - Express request object. Expects `req.params.id`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends the found trimestre with status 200.
 */
exports.getTrimestreById = async (req, res) => {
    const id = req.params.id;
    const trimestre = await trimestreService.getTrimestreById(id);
    res.status(200).json(trimestre);
}

/**
 * Create a new trimestre.
 * @param {Object} req - Express request object. Expects trimestre data in `req.body`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends the created trimestre with status 201 on success.
 */
exports.createTrimestre = async (req, res) => {
    const trimestre = req.body;
    const createdTrimestre = await trimestreService.createTrimestre(trimestre);
    res.status(201).json(createdTrimestre);
}

/**
 * Update an existing trimestre by ID.
 * @param {Object} req - Express request object. Expects `req.params.id` and updated data in `req.body`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends the updated trimestre with status 200 on success.
 */
exports.updateTrimestre = async (req, res) => {
    const id = req.params.id;
    const trimestre = req.body;
    const updatedTrimestre = await trimestreService.updateTrimestre(id, trimestre);
    res.status(200).json(updatedTrimestre);
}

/**
 * Delete a trimestre by ID.
 * @param {Object} req - Express request object. Expects `req.params.id`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends the deleted trimestre (or confirmation) with status 200 on success.
 */
exports.deleteTrimestre = async (req, res) => {
    const id = req.params.id;
    const deletedTrimestre = await trimestreService.deleteTrimestre(id);
    res.status(200).json(deletedTrimestre);
}
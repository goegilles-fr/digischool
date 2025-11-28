const matiereService = require('../services/matiereService.js')

/**
 * Get a matiere by id
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 * @returns {Promise<void>} The promise of the function
 */
exports.getMatiereById = async (req, res) => {
    const id = req.params.id;
    const matiere = await matiereService.getMatiereById(id);
    res.status(200).json(matiere);
}

/**
 * Get all matieres
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 * @returns {Promise<void>} The promise of the function
 */
exports.getAllMatieres = async (req, res) => {
    const matieres = await matiereService.getAllMatieres();
    res.status(200).json(matieres);
}

/**
 * Create a new matiere
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 * @returns {Promise<void>} The promise of the function
 */
exports.createMatiere = async (req, res) => {
    const matiere = req.body;
    const createdMatiere = await matiereService.createMatiere(matiere);
    res.status(201).json(createdMatiere);
}

/**
 * Update a matiere
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 * @returns {Promise<void>} The promise of the function
 */
exports.updateMatiere = async (req, res) => {
    const id = req.params.id;
    const matiere = req.body;
    const updatedMatiere = await matiereService.updateMatiere(id, matiere);
    res.status(200).json(updatedMatiere);
}

/**
 * Delete a matiere
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 * @returns {Promise<void>} The promise of the function
 */
exports.deleteMatiere = async (req, res) => {
    const id = req.params.id;
    const deletedMatiere = await matiereService.deleteMatiere(id);
    res.status(200).json(deletedMatiere);
}
const trimestreService = require('../services/trimestreService');

exports.getAllTrimestres = async (req, res) => {
    const trimestres = await trimestreService.getAllTrimestres();
    res.status(200).json(trimestres);
}

exports.getTrimestreById = async (req, res) => {
    const id = parseInt(req.params.id);
    const trimestre = await trimestreService.getTrimestreById(id);
    res.status(200).json(trimestre);
}

exports.createTrimestre = async (req, res) => {
    const trimestre = req.body;
    const createdTrimestre = await trimestreService.createTrimestre(trimestre);
    res.status(201).json(createdTrimestre);
}

exports.updateTrimestre = async (req, res) => {
    const id = parseInt(req.params.id);
    const trimestre = req.body;
    const updatedTrimestre = await trimestreService.updateTrimestre(id, trimestre);
    res.status(200).json(updatedTrimestre);
}

exports.deleteTrimestre = async (req, res) => {
    const id = parseInt(req.params.id);
    const deletedTrimestre = await trimestreService.deleteTrimestre(id);
    res.status(200).json(deletedTrimestre);
}
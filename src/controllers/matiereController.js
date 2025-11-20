const matiereService = require('../services/matiereService.js')

exports.getMatiereById = async (req, res) => {
    const id = parseInt(req.params.id);
    const matiere = await matiereService.getMatiereById(id);
    res.status(200).json(matiere);
}

exports.getAllMatieres = async (req, res) => {
    const matieres = await matiereService.getAllMatieres();
    res.status(200).json(matieres);
}

exports.createMatiere = async (req, res) => {
    const matiere = req.body;
    const createdMatiere = await matiereService.createMatiere(matiere);
    res.status(201).json(createdMatiere);
}

exports.updateMatiere = async (req, res) => {
    const id = parseInt(req.params.id);
    const matiere = req.body;
    const updatedMatiere = await matiereService.updateMatiere(id, matiere);
    res.status(200).json(updatedMatiere);
}

exports.deleteMatiere = async (req, res) => {
    const id = parseInt(req.params.id);
    const deletedMatiere = await matiereService.deleteMatiere(id);
    res.status(200).json(deletedMatiere);
}
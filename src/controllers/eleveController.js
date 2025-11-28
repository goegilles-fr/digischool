const eleveService = require('../services/eleveService');

exports.getAllEleves = async (req, res) => {
    const eleves = await eleveService.getAllEleves();
    res.status(200).json(eleves);
}

exports.getAllElevesByClasse = async (req, res) => {
    const eleves = await eleveService.getAllElevesByClasse();
    res.status(200).json(eleves);
}

exports.getAllElevesOfClasse = async (req, res) => {
    const id = req.params.id;
    const eleves = await eleveService.getAllElevesOfClasse(id);
    res.status(200).json(eleves);
}

exports.getEleveById = async (req, res) => {
    const id = req.params.id;
    const eleve = await eleveService.getEleveById(id);
    res.status(200).json(eleve);
}

exports.createEleve = async (req, res) => {
    const eleve = req.body;
    const createdEleve = await eleveService.createEleve(eleve);
    res.status(201).json(createdEleve);
}

exports.updateEleve = async (req, res) => {
    const id = req.params.id;
    const eleve = req.body;
    const updatedEleve = await eleveService.updateEleve(id, eleve);
    res.status(200).json(updatedEleve);
}

exports.deleteEleve = async (req, res) => {
    const id = req.params.id;
    const deletedEleve = await eleveService.deleteEleve(id);
    res.status(200).json(deletedEleve);
}
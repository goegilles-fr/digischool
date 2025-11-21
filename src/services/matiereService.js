const matiereRepository = require('../repositories/matiereRepository');

exports.getAllMatieres = async () => {
    const matieres = await matiereRepository.getAllMatieres();
    return matieres;
};

exports.getMatiereById = async (id) => {
    const matiere = await matiereRepository.getMatiereById(id);
    return matiere;
};

exports.createMatiere = async (datas) => {
    const createdMatiere = await matiereRepository.createMatiere(datas);
    return createdMatiere;
};

exports.updateMatiere = async (id, datas) => {
    const updatedMatiere = await matiereRepository.updateMatiere(id, datas);
    return updatedMatiere;
};

exports.deleteMatiere = async (id) => {
    const deletedMatiere = await matiereRepository.deleteMatiere(id);
    return deletedMatiere;
};
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
    let matiere = new Matiere(datas.id, datas.nom);
    const createdMatiere = await matiereRepository.createMatiere(matiere);
    return createdMatiere;
};

exports.updateMatiere = async (id, datas) => {
    let matiere = new Matiere(datas.id, datas.nom);
    const updatedMatiere = await matiereRepository.updateMatiere(id, matiere);
    return updatedMatiere;
};

exports.deleteMatiere = async (id) => {
    const deletedMatiere = await matiereRepository.deleteMatiere(id);
    return deletedMatiere;
};
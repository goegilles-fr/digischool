const eleveRepository = require('../repositories/eleveRepository');

exports.getAllEleves = async () => {
    const eleves = await eleveRepository.getAllEleves();
    return eleves;
};

exports.getAllElevesByClasse = async () => {
    const eleves = await eleveRepository.getAllElevesByClasse();
    return eleves;
};

exports.getAllElevesOfClasse = async (classeId) => {
    const eleves = await eleveRepository.getAllElevesOfClasse(classeId);
    return eleves;
};

exports.getEleveById = async (id) => {
    const eleve = await eleveRepository.getEleveById(id);
    return eleve;
};

exports.createEleve = async (datas) => {
    const createdEleve = await eleveRepository.createEleve(datas);
    return createdEleve;
};

exports.updateEleve = async (id, datas) => {
    const updatedEleve = await eleveRepository.updateEleve(id, datas);
    return updatedEleve;
};

exports.deleteEleve = async (id) => {
    const deletedEleve = await eleveRepository.deleteEleve(id);
    return deletedEleve;
};
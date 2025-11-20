const eleveRepository = require('../repositories/eleveRepository');

exports.getAllEleves = async () => {
    const eleves = await eleveRepository.getAllEleves();
    return eleves;
};

exports.getEleveById = async (id) => {
    const eleve = await eleveRepository.getEleveById(id);
    return eleve;
};

exports.createEleve = async (datas) => {
    let eleve = new Eleve(datas.id, datas.nom, datas.prenom, datas.classe, datas.date_naissance, datas.adresse, datas.sexe);
    const createdEleve = await eleveRepository.createEleve(eleve);
    return createdEleve;
};

exports.updateEleve = async (id, datas) => {
    let eleve = new Eleve(datas.id, datas.nom, datas.prenom, datas.classe, datas.date_naissance, datas.adresse, datas.sexe);
    const updatedEleve = await eleveRepository.updateEleve(id, eleve);
    return updatedEleve;
};

exports.deleteEleve = async (id) => {
    const deletedEleve = await eleveRepository.deleteEleve(id);
    return deletedEleve;
};
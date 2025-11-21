const classeRepository = require('../repositories/classeRepository');

exports.getAllClasse = async () => {
    return await classeRepository.getAllClasse();
}

exports.getClasseById = async (id) => {
    return await classeRepository.getClasseById(id);
}

exports.createClasse = async (classe) => {
    if (!classe.nom || classe.profId === null || classe.profId === undefined) return null;

    return await classeRepository.createClasse({ ...classe, profId: classe.profId });
}

exports.updateClasse = async (id, classe) => {
    const updatedPayload = { ...classe, id: id };
    if (classe.profId !== undefined) {
        updatedPayload.profId = classe.profId;
    }

    return await classeRepository.updateClasse(updatedPayload);
}

exports.deleteClasse = async (id) => {
    return await classeRepository.deleteClasse(id);
}
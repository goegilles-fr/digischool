const classeRepository = require('../repositories/classeRepository');

exports.getAllClasse = () => {
    return classeRepository.getAllClasse();
}

exports.getClasseById = (id) => {
    const numericId = Number(id);
    if(Number.isNaN(numericId)) return null;

    return classeRepository.getClasseById(numericId);
}

exports.createClasse = (classe) => {
    if(!classe.nom || classe.profId === null || classe.profId === undefined) return null;

    const numericProfId = Number(classe.profId);
    if(Number.isNaN(numericProfId)) return null;

    return classeRepository.createClasse({ ...classe, profId:numericProfId });
}

exports.updateClasse = (id, classe) => {
    const numericId = Number(id);
    if(Number.isNaN(numericId)) return null;

    const updatedPayload = { ...classe, id:numericId };
    if(classe.profId !== undefined) {
        const numericProfId = Number(classe.profId);
        if(Number.isNaN(numericProfId)) return null;
        updatedPayload.profId = numericProfId;
    }

    return classeRepository.updateClasse(updatedPayload);
}

exports.deleteClasse = (id) => {
    const numericId = Number(id);
    if(Number.isNaN(numericId)) return false;
    return classeRepository.deleteClasse(numericId);
}
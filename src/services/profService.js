const profRepository = require('../repositories/profRepository');

exports.getAllProf = () => {
    return profRepository.getAllProf();
}

exports.getProfById = (id) => {
    return profRepository.getProfById(Number(id));
}

exports.createProf = (prof) => {
    if(!prof.nom || !prof.prenom) return null;
    return profRepository.createProf(prof);
}

exports.updateProf = (id, prof) => {
    const numericId = Number(id);
    if(Number.isNaN(numericId)) return null;
    return profRepository.updateProf({ ...prof, id:numericId });
}

exports.deleteProf = (id) => {
    return profRepository.deleteProf(Number(id));
}
const profRepository = require('../repositories/profRepository');

exports.getAllProf = async () => {
    return await profRepository.getAllProf();
}

exports.getProfById = async (id) => {
    return await profRepository.getProfById(id);
}

exports.createProf = async (prof) => {
    if (!prof.nom || !prof.prenom) return null;
    return await profRepository.createProf(prof);
}

exports.updateProf = async (id, prof) => {
    return await profRepository.updateProf({ ...prof, id: id });
}

exports.deleteProf = async (id) => {
    return await profRepository.deleteProf(id);
}
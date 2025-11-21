const trimestreRepository = require('../repositories/trimestreRepository');

exports.getAllTrimestres = async () => {
    const trimestres = await trimestreRepository.getAllTrimestres();
    return trimestres;
};

exports.getTrimestreById = async (id) => {
    const trimestre = await trimestreRepository.getTrimestreById(id);
    return trimestre;
};

exports.createTrimestre = async (datas) => {
   
    const trimestre = {
        nom: datas.nom,
        date: new Date(datas.date)
    };
    const createdTrimestre = await trimestreRepository.createTrimestre(trimestre);
    return createdTrimestre;
};

exports.updateTrimestre = async (id, datas) => {
 
    const trimestre = {
        nom: datas.nom,
        date: new Date(datas.date)
    };
    const updatedTrimestre = await trimestreRepository.updateTrimestre(id, trimestre);
    return updatedTrimestre;
};

exports.deleteTrimestre = async (id) => {
    const deletedTrimestre = await trimestreRepository.deleteTrimestre(id);
    return deletedTrimestre;
};
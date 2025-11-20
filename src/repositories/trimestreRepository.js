let trimestres = [];

exports.getAllTrimestres = async () => {
    return trimestres;
};

exports.getTrimestreById = async (id) => {
    return trimestres.find(trimestre => trimestre.idtrimestre === id);
};

exports.createTrimestre = async (trimestre) => {
    trimestres.push(trimestre);
    return trimestre;
};

exports.updateTrimestre = async (id, trimestre) => {
    const index = trimestres.findIndex(trimestre => trimestre.idtrimestre === id);
    if (index !== -1) {
        trimestres[index] = trimestre;
        return trimestre;
    }
    return null;
};

exports.deleteTrimestre = async (id) => {
    const index = trimestres.findIndex(trimestre => trimestre.idtrimestre === id);
    if (index !== -1) {
        trimestres.splice(index, 1);
        return true;
    }
    return false;
};
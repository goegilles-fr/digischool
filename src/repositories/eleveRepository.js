let eleves = [];

exports.getAllEleves = async () => {
    return eleves;
};

exports.getEleveById = async (id) => {
    return eleves.find(eleve => eleve.id === id);
};

exports.createEleve = async (eleve) => {
    eleves.push(eleve);
    return eleve;
};

exports.updateEleve = async (id, eleve) => {
    const index = eleves.findIndex(eleve => eleve.id === id);
    if (index !== -1) {
        eleves[index] = eleve;
        return eleve;
    }
    return null;
};

exports.deleteEleve = async (id) => {
    const index = eleves.findIndex(eleve => eleve.id === id);
    if (index !== -1) {
        eleves.splice(index, 1);
        return true;
    }
    return false;
};
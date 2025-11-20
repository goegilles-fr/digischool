let matieres = [];

exports.getAllMatieres = async () => {
    return matieres;
};

exports.getMatiereById = async (id) => {
    return matieres.find(matiere => matiere.id === id);
};

exports.createMatiere = async (matiere) => {
    matieres.push(matiere);
    return matiere;
};

exports.updateMatiere = async (id, matiere) => {
    const index = matieres.findIndex(matiere => matiere.id === id);
    if (index !== -1) {
        matieres[index] = matiere;
        return matiere;
    }
    return null;
};

exports.deleteMatiere = async (id) => {
    const index = matieres.findIndex(matiere => matiere.id === id);
    if (index !== -1) {
        matieres.splice(index, 1);
        return true;
    }
    return false;
};
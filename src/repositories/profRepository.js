let profList = [
    { id:1, nom:"Dupont", prenom:"Paul", dateNaissance:"12-03-1979", adresse:"12 rue du pres, 34090, Montpellier", sexe:"HOMME" },
    { id:2, nom:"Jacquet", prenom:"Jean", dateNaissance:"01-08-1974", adresse:"124 rue des quiches, 30000, Nimes", sexe:"HOMME" },
    { id:3, nom:"Torpi", prenom:"Elise", dateNaissance:"21-07-1982", adresse:"1450 avenue des champs, 34080, Montpellier", sexe:"FEMME" },
    { id:4, nom:"Aumont", prenom:"Steve", dateNaissance:"27-11-1988", adresse:"45 allée du foin, 34980, St Clement", sexe:"HOMME" }
];

exports.getAllProf = () => {
    return profList;
};

exports.getProfById = (id) => {
    return profList.find((p) => p.id === id) || null;
};

exports.createProf = (prof) => {
    const maxId = profList.length ? Math.max(...profList.map(p => p.id)) : 0;
    const newProf = { ...prof, id: maxId + 1 };

    profList.push(newProf);

    return newProf;
};

exports.updateProf = (prof) => {
    const index = profList.findIndex((p) => p.id === prof.id);

    if(index === -1) return null;
    profList[index] = { ...profList[index], ...prof };

    return profList[index];
};

exports.deleteProf = (id) => {
    const updatedProfList = profList.filter((p) => p.id !== id);

    const deleted = updatedProfList.length !== profList.length;
    if(deleted) profList = updatedProfList;

    return deleted;
};
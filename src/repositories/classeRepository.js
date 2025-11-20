let classeList = [
    { id:1, nom:"D02", profId:1 },
    { id:2, nom:"D04", profId:2 },
    { id:3, nom:"D03", profId:2 },
    { id:4, nom:"C01", profId:4 },
    { id:5, nom:"C06", profId:1 },
    { id:6, nom:"C04", profId:3 },
    { id:7, nom:"B07", profId:4 },
    { id:8, nom:"B03", profId:3 },
    { id:9, nom:"A05", profId:1 }
];

exports.getAllClasse = () => {
    return classeList;
}

exports.getClasseById = (id) => {
    return classeList.find((c) => c.id === id) || null;
}

exports.createClasse = (classe) => {
    const maxId = classeList.length ? Math.max( ...classeList.map((c) => c.id)) : 0;
    const newClasse = { ...classe, id: maxId + 1 };

    classeList.push(newClasse);

    return newClasse;
}

exports.updateClasse = (classe) => {
    const index = classeList.findIndex((c) => c.id === classe.id);

    if(index === -1) return null;

    classeList[index] = { ...classeList[index], ...classe };
    return classeList[index];
}

exports.deleteClasse = (id) => {
    const updatedClassList = classeList.filter((c) => c.id !== id);

    const deleted = updatedClassList.length !== classeList.length;
    if(deleted) classeList = updatedClassList;

    return deleted;
}
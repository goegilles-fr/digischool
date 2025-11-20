const classeService = require('../services/classeService');

exports.getAllClasse = (request, response) => {
    const classeList = classeService.getAllClasse();
    response.status(200).json(classeList);
}

exports.getClasseById = (request, response) => {
    const classe = classeService.getClasseById(request.params.id);
    if(classe) response.status(200).json(classe);
    else response.status(404).json({ message:"Classe non trouvée" });
}

exports.createClasse = (request, response) => {
    const classe = classeService.createClasse(request.body);
    if(classe) response.status(201).json(classe);
    else response.status(400).json({ message:"Données invalides" });
}

exports.updateClasse = (request, response) => {
    const classe = classeService.updateClasse(request.params.id, request.body);
    if(classe) response.status(200).json(classe);
    else response.status(404).json({ message:"Classe non trouvée" });
}

exports.deleteClasse = (request, response) => {
    const deleted = classeService.deleteClasse(request.params.id);
    if(deleted) response.sendStatus(204);
    else response.status(404).json({ message:"Classe non trouvée" });
}
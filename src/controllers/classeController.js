const classeService = require('../services/classeService');

exports.getAllClasse = async (request, response) => {
    const classeList = await classeService.getAllClasse();
    response.status(200).json(classeList);
}

exports.getClasseById = async (request, response) => {
    const classe = await classeService.getClasseById(request.params.id);
    if (classe) response.status(200).json(classe);
    else response.status(404).json({ message: "Classe non trouvée" });
}

exports.createClasse = async (request, response) => {
    try {
        const classe = await classeService.createClasse(request.body);
        if (classe) response.status(201).json(classe);
        else response.status(400).json({ message: "Données invalides" });
    } catch (error) {
        response.status(500).json({ message: "Erreur lors de la création de la classe" });
    }
}

exports.updateClasse = async (request, response) => {
    try {
        const classe = await classeService.updateClasse(request.params.id, request.body);
        if (classe) response.status(200).json(classe);
        else response.status(404).json({ message: "Classe non trouvée" });
    } catch (error) {
        response.status(500).json({ message: "Erreur lors de la mise à jour de la classe" });
    }
}

exports.deleteClasse = async (request, response) => {
    try {
        const deleted = await classeService.deleteClasse(request.params.id);
        if (deleted) response.sendStatus(204);
        else response.status(404).json({ message: "Classe non trouvée" });
    } catch (error) {
        response.status(500).json({ message: "Erreur lors de la suppression de la classe" });
    }
}
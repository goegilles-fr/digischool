const profService = require('../services/profService');

exports.getAllProf = async (request, response) => {
    const profList = await profService.getAllProf();
    response.status(200).json(profList);
}

exports.getProfById = async (request, response) => {
    const prof = await profService.getProfById(request.params.id);
    if (prof) response.status(200).json(prof);
    else response.status(404).json({ message: "Prof non trouvé" });
}

exports.createProf = async (request, response) => {
    try {
        const prof = await profService.createProf(request.body);
        if (prof) response.status(201).json(prof);
        else response.status(400).json({ message: "Données invalides" });
    } catch (error) {
        response.status(500).json({ message: "Erreur lors de la création du prof" });
    }
}

exports.updateProf = async (request, response) => {
    try {
        const prof = await profService.updateProf(request.params.id, request.body);
        if (prof) response.status(200).json(prof);
        else response.status(404).json({ message: "Prof non trouvé" });
    } catch (error) {
        response.status(500).json({ message: "Erreur lors de la mise à jour du prof" });
    }
}

exports.deleteProf = async (request, response) => {
    try {
        const deleted = await profService.deleteProf(request.params.id);
        if (deleted) response.sendStatus(204);
        else response.status(404).json({ message: "Prof non trouvé" });
    } catch (error) {
        response.status(500).json({ message: "Erreur lors de la suppression du prof" });
    }
}
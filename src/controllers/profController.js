const profService = require('../services/profService');

exports.getAllProf = (request, response) => {
    const profList = profService.getAllProf();
    response.status(200).json(profList);
}

exports.getProfById = (request, response) => {
    const prof = profService.getProfById(request.params.id);
    if(prof) response.status(200).json(prof);
    else response.status(404).json({ message:"Prof non trouvé" });
}

exports.createProf = (request, response) => {
    const prof = profService.createProf(request.body);
    if(prof) response.status(201).json(prof);
    else response.status(400).json({ message:"Données invalides" });
}

exports.updateProf = (request, response) => {
    const prof = profService.updateProf(request.params.id, request.body);
    if(prof) response.status(200).json(prof);
    else response.status(404).json({ message:"Prof non trouvé" });
}

exports.deleteProf = (request, response) => {
    const deleted = profService.deleteProf(request.params.id);
    if(deleted) response.sendStatus(204);
    else response.status(404).json({ message:"Prof non trouvé" });
}
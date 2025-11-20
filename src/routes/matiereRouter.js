const matiereController = require('../controllers/matiereController');
const express = require('express');
const router = express.Router();

router.get('/matieres', matiereController.getAllMatieres);
router.get('/matieres/:id', matiereController.getMatiereById);

router.post('/matieres', matiereController.createMatiere);

router.put('/matieres/:id', matiereController.updateMatiere);

router.delete('/matieres/:id', matiereController.deleteMatiere);

module.exports = router;
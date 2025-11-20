const express = require('express');
const router = express.Router();

const classeController = require('../controllers/classeController');

router.get('/classes', classeController.getAllClasse);
router.get('/classes/:id', classeController.getClasseById);
router.post('/classes', classeController.createClasse);
router.put('/classes/:id', classeController.updateClasse);
router.delete('/classes/:id', classeController.deleteClasse);

module.exports = router;
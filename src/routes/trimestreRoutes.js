const trimestreController = require('../controllers/trimestreController');
const express = require('express');
const router = express.Router();

router.get('/trimestres', trimestreController.getAllTrimestres);
router.get('/trimestres/:id', trimestreController.getTrimestreById);

router.post('/trimestres', trimestreController.createTrimestre);

router.put('/trimestres/:id', trimestreController.updateTrimestre);

router.delete('/trimestres/:id', trimestreController.deleteTrimestre);

module.exports = router;
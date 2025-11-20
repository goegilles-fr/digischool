const express = require('express');
const router = express.Router();

const profController = require('../controllers/profController');

router.get('/profs', profController.getAllProf);
router.get('/profs/:id', profController.getProfById);
router.post('/profs', profController.createProf);
router.put('/profs/:id', profController.updateProf);
router.delete('/profs/:id', profController.deleteProf);

module.exports = router;
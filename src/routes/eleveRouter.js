const eleveController = require('../controllers/eleveController');
const express = require('express');
const router = express.Router();

router.get('/eleves', eleveController.getAllEleves);
router.get('/eleves/:id', eleveController.getEleveById);

router.post('/eleves', eleveController.createEleve);

router.put('/eleves/:id', eleveController.updateEleve);

router.delete('/eleves/:id', eleveController.deleteEleve);

module.exports = router;
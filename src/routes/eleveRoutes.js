const eleveController = require('../controllers/eleveController');
const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /api/eleves:
 *   get:
 *     tags:
 *       - Eleves
 *     summary: Get all eleves
 *     responses:
 *       200:
 *         description: A list of eleves
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/eleves', eleveController.getAllEleves);

/**
 * @openapi
 * /api/eleves/{id}:
 *   get:
 *     tags:
 *       - Eleves
 *     summary: Get an eleve by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the eleve to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The eleve
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/eleves/:id', eleveController.getEleveById);

/**
 * @openapi
 * /api/eleves:
 *   post:
 *     tags:
 *       - Eleves
 *     summary: Create a new eleve
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               classe:
 *                 type: string
 *               date_naissance:
 */
router.post('/eleves', eleveController.createEleve);

/**
 * @openapi
 * /api/eleves/{id}:
 *   put:
 *     tags:
 *       - Eleves
 *     summary: Update an eleve by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the eleve to update
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               classe:
 *                 type: string
 *               date_naissance:
 *                 type: string
 */
router.put('/eleves/:id', eleveController.updateEleve);

/**
 * @openapi
 * /api/eleves/{id}:
 *   delete:
 *     tags:
 *       - Eleves
 *     summary: Delete an eleve by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the eleve to delete
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete('/eleves/:id', eleveController.deleteEleve);

module.exports = router;
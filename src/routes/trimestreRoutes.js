const trimestreController = require('../controllers/trimestreController');
const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /api/trimestres:
 *   get:
 *     tags:
 *       - Trimestres
 *     summary: Get all trimestres
 *     responses:
 *       200:
 *         description: A list of trimestres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/trimestres', trimestreController.getAllTrimestres);

/**
 * @openapi
 * /api/trimestres/{id}:
 *   get:
 *     tags:
 *       - Trimestres
 *     summary: Get a trimestre by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the trimestre to retrieve
 *         required: true
 *         schema:
 *           type: integer
 */
router.get('/trimestres/:id', trimestreController.getTrimestreById);

/**
 * @openapi
 * /api/trimestres:
 *   post:
 *     tags:
 *       - Trimestres
 *     summary: Create a new trimestre
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trimestre:
 *                 type: string
 */
router.post('/trimestres', trimestreController.createTrimestre);

/**
 * @openapi
 * /api/trimestres/{id}:
 *   put:
 *     tags:
 *       - Trimestres
 *     summary: Update a trimestre by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the trimestre to update
 *         required: true
 *         schema:
 *           type: integer
 */
router.put('/trimestres/:id', trimestreController.updateTrimestre);

/**
 * @openapi
 * /api/trimestres/{id}:
 *   delete:
 *     tags:
 *       - Trimestres
 *     summary: Delete a trimestre by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the trimestre to delete
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete('/trimestres/:id', trimestreController.deleteTrimestre);

module.exports = router;
const matiereController = require('../controllers/matiereController');
const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /api/matieres:
 *   get:
 *     tags:
 *       - Matieres
 *     summary: Get all matieres
 *     responses:
 *       200:
 *         description: A list of matieres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object 
 */
router.get('/matieres', matiereController.getAllMatieres);

/**
 * @openapi
 * /api/matieres/{id}:
 *   get:
 *     tags:
 *       - Matieres
 *     summary: Get a matiere by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the matiere to get
 *         required: true
 *         schema:
 *           type: integer
 */
router.get('/matieres/:id', matiereController.getMatiereById);

/**
 * @openapi
 * /api/matieres:
 *   post:
 *     tags:
 *       - Matieres
 *     summary: Create a new matiere
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 */
router.post('/matieres', matiereController.createMatiere);

/**
 * @openapi
 * /api/matieres/{id}:
 *   put:
 *     tags:
 *       - Matieres
 *     summary: Update a matiere by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the matiere to update
 *         required: true
 *         schema:
 *           type: integer
 */
router.put('/matieres/:id', matiereController.updateMatiere);

/**
 * @openapi
 * /api/matieres/{id}:
 *   delete:
 *     tags:
 *       - Matieres
 *     summary: Delete a matiere by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the matiere to delete
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete('/matieres/:id', matiereController.deleteMatiere);

module.exports = router;
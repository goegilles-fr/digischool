const express = require('express');
const router = express.Router();

const classeController = require('../controllers/classeController');

/**
 * @openapi
 * /api/classes:
 *   get:
 *     tags:
 *       - Classes
 *     summary: Get all classes
 *     responses:
 *       200:
 *         description: A list of classes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/classes', classeController.getAllClasse);

/**
 * @openapi
 * /api/classes/{id}:
 *   get:
 *     tags:
 *       - Classes
 *     summary: Get a class by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the class to get
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The class
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/classes/:id', classeController.getClasseById);

/**
 * @openapi
 * /api/classes:
 *   post:
 *     tags:
 *       - Classes
 *     summary: Create a new class
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               profId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The created class
 *         content:
 *           application/json:
 */
router.post('/classes', classeController.createClasse);

/**
 * @openapi
 * /api/classes/{id}:
 *   put:
 *     tags:
 *       - Classes
 *     summary: Update a class by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the class to update
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
 *               profId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The updated class
 */
router.put('/classes/:id', classeController.updateClasse);

/**
 * @openapi
 * /api/classes/{id}:
 *   delete:
 *     tags:
 *       - Classes
 *     summary: Delete a class by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the class to delete
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete('/classes/:id', classeController.deleteClasse);

module.exports = router;
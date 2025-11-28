const express = require("express");
const router = express.Router();

const profController = require("../controllers/profController");

/**
 * @openapi
 * /api/profs:
 *   get:
 *     tags:
 *       - Professors
 *     summary: Get all professors
 *     responses:
 *       200:
 *         description: A list of professors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/profs", profController.getAllProf);

/**
 * @openapi
 * /api/profs/{id}:
 *   get:
 *     tags:
 *       - Professors
 *     summary: Get a professor by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the note to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A professor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get("/profs/:id", profController.getProfById);

/**
 * @openapi
 * /api/profs:
 *   post:
 *     tags:
 *       - Professors
 *     summary: Create a new professor
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
 *               dateNaissance:
 *                 type: string
 *                 example: '1979-09-05T23:09:19.790Z'
 *               adresse:
 *                 type: string
 *               sexe:
 *                 type: string
 *     responses:
 *       200:
 *         description: The created professor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post("/profs", profController.createProf);

/**
 * @openapi
 * /api/profs/{id}:
 *   put:
 *     tags:
 *       - Professors
 *     summary: Update a professor by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the professor to update
 *         required: true
 *         schema:
 *           type: string
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
 *               dateNaissance:
 *                 type: string
 *                 example: '1979-09-05T23:09:19.790Z'
 *               adresse:
 *                 type: string
 *               sexe:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated professor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.put("/profs/:id", profController.updateProf);

/**
 * @openapi
 * /api/profs/{id}:
 *   delete:
 *     tags:
 *       - Professors
 *     summary: Delete a professor by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the professor to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted professor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.delete("/profs/:id", profController.deleteProf);

module.exports = router;

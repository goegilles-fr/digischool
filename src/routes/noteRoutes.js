const noteController = require("../controllers/noteController");
const express = require("express");
const router = express.Router();

/**
 * @openapi
 * /api/notes:
 *   get:
 *     tags:
 *       - Notes
 *     summary: Get all notes
 *     responses:
 *       200:
 *         description: A list of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/notes", noteController.getAllNotes);

/**
 * @openapi
 * /api/notes/{id}:
 *   get:
 *     tags:
 *       - Notes
 *     summary: Get a note by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the note to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The note with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get("/notes/:id", noteController.getNoteById);

/**
 * @openapi
 * /api/notes:
 *   post:
 *     tags:
 *       - Notes
 *     summary: Create a new note
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              date_saisie:
 *                 type: string
 *                 example: '1979-09-05T23:09:19.790Z'
 *              ideleve:
 *                 type: string
 *              idclasse:
 *                 type: string
 *              idmatiere:
 *                 type: string
 *              idprof:
 *                 type: string
 *              idtrimestre:
 *                 type: string
 *              note:
 *                 type: integer
 *              avis:
 *                 type: string
 *              avancement:
 *                 type: string
 *     responses:
 *       200:
 *         description: The created note
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post("/notes", noteController.createNote);

/**
 * @openapi
 * /api/notes/{id}:
 *   put:
 *     tags:
 *       - Notes
 *     summary: Update a note by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the note to update
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             date_saisie:
 *                type: string
 *                example: '1979-09-05T23:09:19.790Z'
 *             ideleve:
 *                type: string
 *             idclasse:
 *                type: string
 *             idmatiere:
 *                type: string
 *             idprof:
 *                type: string
 *             idtrimestre:
 *                type: string
 *             note:
 *                type: integer
 *             avis:
 *                type: string
 *             avancement:
 *                type: string
 *     responses:
 *       200:
 *         description: The updated note
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.put("/notes/:id", noteController.updateNote);

/**
 * @openapi
 * /api/notes/{id}:
 *   delete:
 *     tags:
 *       - Notes
 *     summary: Delete a note by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the note to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted note
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.delete("/notes/:id", noteController.deleteNote);



/**
 * @openapi
 * /api/notes/eleve/{eleveId}:
 *   get:
 *     tags:
 *       - Notes
 *     summary: Récupérer les notes d'un élève
 *     parameters:
 *       - name: eleveId
 *         in: path
 *         description: ID de l'élève
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des notes de l'élève
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/notes/eleve/:eleveId", noteController.getNotesByEleveId);

/**
 * @openapi
 * /api/notes/prof/{profId}:
 *   get:
 *     tags:
 *       - Notes
 *     summary: Récupérer les élèves et leurs notes selon un professeur
 *     parameters:
 *       - name: profId
 *         in: path
 *         description: ID du professeur
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des notes du professeur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/notes/prof/:profId", noteController.getNotesByProfId);

/**
 * @openapi
 * /api/notes/classe/{classeId}/trimestre/{trimestreId}:
 *   get:
 *     tags:
 *       - Notes
 *     summary: Récupérer les notes par classe et trimestre
 *     parameters:
 *       - name: classeId
 *         in: path
 *         description: ID de la classe
 *         required: true
 *         schema:
 *           type: string
 *       - name: trimestreId
 *         in: path
 *         description: ID du trimestre
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des notes filtrées par classe et trimestre
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/notes/classe/:classeId/trimestre/:trimestreId", noteController.getNotesByClasseAndTrimestre);
module.exports = router;

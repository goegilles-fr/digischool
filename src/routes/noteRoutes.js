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
 *           type: integer
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
 *                 type: integer
 *              idclasse:
 *                 type: integer
 *              idmatiere:
 *                 type: integer
 *              idprof:
 *                 type: integer
 *              idtrimestre:
 *                 type: integer
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
 *                type: integer
 *             idclasse:
 *                type: integer
 *             idmatiere:
 *                type: integer
 *             idprof:
 *                type: integer
 *             idtrimestre:
 *                type: integer
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
 *           type: integer
 */
router.delete("/notes/:id", noteController.deleteNote);

module.exports = router;

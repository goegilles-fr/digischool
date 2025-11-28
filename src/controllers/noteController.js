/**
 * Controller for managing notes.
 *
 * @type {*}
 */
const noteService = require('../services/noteService');

/**
 * Retrieve all notes.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON array of notes with status 200 on success,
 * or a JSON error with status 500 on failure.
 */
exports.getAllNotes = async (req, res) => {
    try {
        const notes = await noteService.getAllNotes();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Retrieve a single note by its ID.
 * @param {Object} req - Express request object. Expects `req.params.id`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends the found note with status 200, a 404 if not found,
 * or a JSON error with status 500 on failure.
 */
exports.getNoteById = async (req, res) => {
    try {
        const id = req.params.id;
        const note = await noteService.getNoteById(id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Create a new note.
 * @param {Object} req - Express request object. Expects note data in `req.body`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends the created note with status 201 on success,
 * or a JSON error with status 400 on validation/error.
 */
exports.createNote = async (req, res) => {
    try {
        const note = req.body;
        const createdNote = await noteService.createNote(note);
        res.status(201).json(createdNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Update an existing note by ID.
 * @param {Object} req - Express request object. Expects `req.params.id` and updated note data in `req.body`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends the updated note with status 200 on success,
 * or a JSON error with status 400 on failure.
 */
exports.updateNote = async (req, res) => {
    try {
        const id = req.params.id;
        const note = req.body;
        const updatedNote = await noteService.updateNote(id, note);
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Delete a note by ID.
 * @param {Object} req - Express request object. Expects `req.params.id`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends the deleted note (or confirmation) with status 200 on success,
 * or a JSON error with status 400 on failure.
 */
exports.deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedNote = await noteService.deleteNote(id);
        res.status(200).json(deletedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Retrieve notes for a specific student (eleve) by their ID.
 * @param {Object} req - Express request object. Expects `req.params.eleveId`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends an array of notes with status 200 on success,
 * or a JSON error with status 500 on failure.
 */
exports.getNotesByEleveId = async (req, res) => {
    try {
        const eleveId = req.params.eleveId;
        const notes = await noteService.getNotesByEleveId(eleveId);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Retrieve notes created by a specific professor (prof) by their ID.
 * @param {Object} req - Express request object. Expects `req.params.profId`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends an array of notes with status 200 on success,
 * or a JSON error with status 500 on failure.
 */
exports.getNotesByProfId = async (req, res) => {
    try {
        const profId = req.params.profId;
        const notes = await noteService.getNotesByProfId(profId);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Retrieve notes for a given class and trimester.
 * @param {Object} req - Express request object. Expects `req.params.classeId` and `req.params.trimestreId`.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends an array of notes with status 200 on success,
 * or a JSON error with status 500 on failure.
 */
exports.getNotesByClasseAndTrimestre = async (req, res) => {
    try {
        const classeId = req.params.classeId;
        const trimestreId = req.params.trimestreId;
        const notes = await noteService.getNotesByClasseAndTrimestre(classeId, trimestreId);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
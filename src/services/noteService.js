/**
 * Service for managing notes.
 *
 * @type {typeof import("../repositories/noteRepository")}
 */
const noteRepository = require('../repositories/noteRepository');

/**
 * Return all notes.
 * @returns {Promise<Array>} Promise resolving to an array of note objects.
 */
exports.getAllNotes = async () => {
    const notes = await noteRepository.getAllNotes();
    return notes;
};

/**
 * Return a note by ID.
 * @param {number|string} id - Note ID.
 * @returns {Promise<Object|null>} Promise resolving to the note or null if not found.
 */
exports.getNoteById = async (id) => {
    const note = await noteRepository.getNoteById(id);
    return note;
};

/**
 * Create a new note from provided data.
 * @param {Object} datas - Incoming note data (expects `date_saisie`, `eleveId`, `classeId`, `matiereId`, `profId`, `trimestreId`, `note`, optional `avis`, `avancement`).
 * @returns {Promise<Object>} Promise resolving to the created note object.
 */
exports.createNote = async (datas) => {
    const note = {
        date_saisie: new Date(datas.date_saisie),
        eleveId: datas.eleveId,
        classeId: datas.classeId,
        matiereId: datas.matiereId,
        profId: datas.profId,
        trimestreId: datas.trimestreId,
        note: parseFloat(datas.note),
        avis: datas.avis || null,
        avancement: datas.avancement || null
    };
    const createdNote = await noteRepository.createNote(note);
    return createdNote;
};

/**
 * Update an existing note by ID with provided data.
 * @param {number|string} id - Note ID to update.
 * @param {Object} datas - Updated note data (same fields as createNote).
 * @returns {Promise<Object>} Promise resolving to the updated note object.
 */
exports.updateNote = async (id, datas) => {
    const note = {
        date_saisie: new Date(datas.date_saisie),
        eleveId: datas.eleveId,
        classeId: datas.classeId,
        matiereId: datas.matiereId,
        profId: datas.profId,
        trimestreId: datas.trimestreId,
        note: parseFloat(datas.note),
        avis: datas.avis || null,
        avancement: datas.avancement || null
    };
    const updatedNote = await noteRepository.updateNote(id, note);
    return updatedNote;
};

/**
 * Delete a note by ID.
 * @param {number|string} id - Note ID to delete.
 * @returns {Promise<Object>} Promise resolving to the deleted note.
 */
exports.deleteNote = async (id) => {
    const deletedNote = await noteRepository.deleteNote(id);
    return deletedNote;
};

/**
 * Return notes for a specific student.
 * @param {number|string} eleveId - Student ID.
 * @returns {Promise<Array>} Promise resolving to an array of notes for the student.
 */
exports.getNotesByEleveId = async (eleveId) => {
    const notes = await noteRepository.getNotesByEleveId(eleveId);
    return notes;
};

/**
 * Return notes for a specific professor.
 * @param {number|string} profId - Professor ID.
 * @returns {Promise<Array>} Promise resolving to an array of notes for the professor.
 */
exports.getNotesByProfId = async (profId) => {
    const notes = await noteRepository.getNotesByProfId(profId);
    return notes;
};

/**
 * Return notes for a class in a specific trimester.
 * @param {number|string} classeId - Class ID.
 * @param {number|string} trimestreId - Trimester ID.
 * @returns {Promise<Array>} Promise resolving to an array of matching notes.
 */
exports.getNotesByClasseAndTrimestre = async (classeId, trimestreId) => {
    const notes = await noteRepository.getNotesByClasseAndTrimestre(classeId, trimestreId);
    return notes;
};
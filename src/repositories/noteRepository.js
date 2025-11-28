/**
 * Repository for managing notes in the database.
 *
 * @type {*}
 */
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * Fetch all notes from the database including related entities.
 * @returns {Promise<Array>} A promise that resolves to an array of note records with related `eleve`, `classe`, `matiere`, `prof`, and `trimestre`.
 */
exports.getAllNotes = async () => {
    return await prisma.note.findMany({
        include: {
            eleve: true,
            classe: true,
            matiere: true,
            prof: true,
            trimestre: true
        }
    });
};

/**
 * Fetch a single note by its ID including related entities.
 * @param {number|string} id - The ID of the note to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the note object with related entities or `null` if not found.
 */
exports.getNoteById = async (id) => {
    return await prisma.note.findUnique({
        where: { id: id },
        include: {
            eleve: true,
            classe: true,
            matiere: true,
            prof: true,
            trimestre: true
        }
    });
};

/**
 * Create a new note record.
 * @param {Object} note - The note data to create.
 * @returns {Promise<Object>} A promise that resolves to the created note including related entities.
 */
exports.createNote = async (note) => {
    return await prisma.note.create({
        data: note,
        include: {
            eleve: true,
            classe: true,
            matiere: true,
            prof: true,
            trimestre: true
        }
    });
};

/**
 * Update an existing note by ID.
 * @param {number|string} id - The ID of the note to update.
 * @param {Object} note - The updated note data.
 * @returns {Promise<Object>} A promise that resolves to the updated note including related entities.
 */
exports.updateNote = async (id, note) => {
    return await prisma.note.update({
        where: { id: id },
        data: note,
        include: {
            eleve: true,
            classe: true,
            matiere: true,
            prof: true,
            trimestre: true
        }
    });
};

/**
 * Delete a note by ID.
 * @param {number|string} id - The ID of the note to delete.
 * @returns {Promise<Object>} A promise that resolves to the deleted note record.
 */
exports.deleteNote = async (id) => {
    return await prisma.note.delete({
        where: { id: id }
    });
};


/**
 * Fetch notes associated with a specific student (eleve).
 * @param {number|string} eleveId - The ID of the student.
 * @returns {Promise<Array>} A promise that resolves to an array of notes for the student.
 */
exports.getNotesByEleveId = async (eleveId) => {
    return await prisma.note.findMany({
        where: { eleveId: eleveId },
        include: {
            eleve: true,
            classe: true,
            matiere: true,
            prof: true,
            trimestre: true
        }
    });
};

/**
 * Fetch notes associated with a specific professor (prof).
 * @param {number|string} profId - The ID of the professor.
 * @returns {Promise<Array>} A promise that resolves to an array of notes for the professor.
 */
exports.getNotesByProfId = async (profId) => {
    return await prisma.note.findMany({
        where: { profId: profId },
        include: {
            eleve: true,
            classe: true,
            matiere: true,
            prof: true,
            trimestre: true
        }
    });
};

/**
 * Fetch notes for a specific class and trimester.
 * @param {number|string} classeId - The ID of the class.
 * @param {number|string} trimestreId - The ID of the trimester.
 * @returns {Promise<Array>} A promise that resolves to an array of matching notes.
 */
exports.getNotesByClasseAndTrimestre = async (classeId, trimestreId) => {
    return await prisma.note.findMany({
        where: { 
            classeId: classeId,
            trimestreId: trimestreId
        },
        include: {
            eleve: true,
            classe: true,
            matiere: true,
            prof: true,
            trimestre: true
        }
    });
};

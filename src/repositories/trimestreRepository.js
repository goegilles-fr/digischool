/**
 * Repository for managing trimestres in the database.
 *
 * @type {*}
 */
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

/**
 * Fetch all trimestres from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of trimestre records.
 */
exports.getAllTrimestres = async () => {
    return await prisma.trimestre.findMany();
};

/**
 * Fetch a single trimestre by its ID.
 * @param {number|string} id - The ID of the trimestre to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the trimestre object or `null` if not found.
 */
exports.getTrimestreById = async (id) => {
    return await prisma.trimestre.findUnique({
        where: { id: id }
    });
};

/**
 * Create a new trimestre record.
 * @param {Object} trimestre - The trimestre data to create.
 * @returns {Promise<Object>} A promise that resolves to the created trimestre.
 */
exports.createTrimestre = async (trimestre) => {
    return await prisma.trimestre.create({
        data: trimestre
    });
};

/**
 * Update an existing trimestre by ID.
 * @param {number|string} id - The ID of the trimestre to update.
 * @param {Object} trimestre - The updated trimestre data.
 * @returns {Promise<Object>} A promise that resolves to the updated trimestre.
 */
exports.updateTrimestre = async (id, trimestre) => {
    return await prisma.trimestre.update({
        where: { id: id },
        data: trimestre
    });
};

/**
 * Delete a trimestre by ID.
 * @param {number|string} id - The ID of the trimestre to delete.
 * @returns {Promise<Object>} A promise that resolves to the deleted trimestre record.
 */
exports.deleteTrimestre = async (id) => {
    return await prisma.trimestre.delete({
        where: { id: id }
    });
};
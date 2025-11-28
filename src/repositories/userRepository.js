const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * Get all users
 * @returns {Promise<Array>} list of users
 */
exports.getAllUsers = async () => {
    return await prisma.user.findMany();
};

/**
 * Get a user by id
 * @param {string} id - user id
 * @returns {Promise<User>} user
 */
exports.getUserById = async (id) => {
    return await prisma.user.findUnique({
        where: { id: id }
    });
};

/**
 * Get a user by email
 * @param {string} email - user email
 * @returns {Promise<User>} user
 */
exports.getUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email: email }
    });
};

/**
 * Create a user
 * @param {User} user - user to create
 * @returns {Promise<User>} created user
 */
exports.createUser = async (user) => {
    return await prisma.user.create({
        data: user
    });
};

/**
 * Update a user
 * @param {string} id - user id
 * @param {User} user - user to update
 * @returns {Promise<User>} updated user
 */
exports.updateUser = async (id, user) => {
    return await prisma.user.update({
        where: { id: id },
        data: user
    });
};

/**
 * Delete a user
 * @param {string} id - user id
 * @returns {Promise<User>} deleted user
 */
exports.deleteUser = async (id) => {
    return await prisma.user.delete({
        where: { id: id }
    });
};

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getAllUsers = async () => {
    return await prisma.user.findMany();
};

exports.getUserById = async (id) => {
    return await prisma.user.findUnique({
        where: { id: id }
    });
};

exports.getUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email: email }
    });
};

exports.createUser = async (user) => {
    return await prisma.user.create({
        data: user
    });
};

exports.updateUser = async (id, user) => {
    return await prisma.user.update({
        where: { id: id },
        data: user
    });
};

exports.deleteUser = async (id) => {
    return await prisma.user.delete({
        where: { id: id }
    });
};
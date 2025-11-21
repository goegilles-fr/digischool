const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getAllTrimestres = async () => {
    return await prisma.trimestre.findMany();
};

exports.getTrimestreById = async (id) => {
    return await prisma.trimestre.findUnique({
        where: { id: id }
    });
};

exports.createTrimestre = async (trimestre) => {
    return await prisma.trimestre.create({
        data: trimestre
    });
};

exports.updateTrimestre = async (id, trimestre) => {
    return await prisma.trimestre.update({
        where: { id: id },
        data: trimestre
    });
};

exports.deleteTrimestre = async (id) => {
    return await prisma.trimestre.delete({
        where: { id: id }
    });
};
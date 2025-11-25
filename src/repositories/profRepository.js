const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getAllProf = async () => {
    return await prisma.prof.findMany();
};

exports.getProfById = async (id) => {
    return await prisma.prof.findUnique({
        where: { id: id },
    });
};

exports.createProf = async (prof) => {
    return await prisma.prof.create({
        data: {
            nom: prof.nom,
            prenom: prof.prenom,
            dateNaissance: new Date(prof.dateNaissance),
            adresse: prof.adresse,
            sexe: prof.sexe,
        },
    });
};

exports.updateProf = async (prof) => {
    return await prisma.prof.update({
        where: { id: prof.id },
        data: {
            nom: prof.nom,
            prenom: prof.prenom,
            dateNaissance: new Date(prof.dateNaissance),
            adresse: prof.adresse,
            sexe: prof.sexe,
        },
    });
};

exports.deleteProf = async (id) => {
    try {
        await prisma.prof.delete({
            where: { id: id },
        });
        return true;
    } catch (error) {
        if (error.code === 'P2025') {
            return false;
        }
        throw error;
    }
};
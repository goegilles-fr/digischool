const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

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

exports.deleteNote = async (id) => {
    return await prisma.note.delete({
        where: { id: id }
    });
};
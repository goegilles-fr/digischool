const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

exports.getAllMatieres = async () => {
  return await prisma.matiere.findMany();
};

exports.getMatiereById = async (id) => {
  return await prisma.matiere.findUnique({
    where: { id: id },
  });
};

exports.createMatiere = async (matiere) => {
  return await prisma.matiere.create({
    data: {
      nom: matiere.nom,
    },
  });
};

exports.updateMatiere = async (id, matiere) => {
  return await prisma.matiere.update({
    where: { id: id },
    data: {
      nom: matiere.nom,
    },
  });
};

exports.deleteMatiere = async (id) => {
  try {
    await prisma.matiere.delete({
      where: { id: id },
    });
    return true;
  } catch (error) {
    if (error.code === "P2025") {
      return false;
    }
    throw error;
  }
};

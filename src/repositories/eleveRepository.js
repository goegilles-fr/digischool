const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

exports.getAllEleves = async () => {
  return await prisma.eleve.findMany();
};

exports.getEleveById = async (id) => {
  return await prisma.eleve.findUnique({
    where: { id: id },
  });
};

exports.createEleve = async (eleve) => {
  return await prisma.eleve.create({
    data: {
      nom: eleve.nom,
      prenom: eleve.prenom,
      classeId: eleve.classeId,
      date_naissance: eleve.date_naissance,
      adresse: eleve.adresse,
      sexe: eleve.sexe,
    },
  });
};

exports.updateEleve = async (id, eleve) => {
  return await prisma.eleve.update({
    where: { id: id },
    data: {
      nom: eleve.nom,
      prenom: eleve.prenom,
      classeId: eleve.classeId,
      date_naissance: eleve.date_naissance,
      adresse: eleve.adresse,
      sexe: eleve.sexe,
    },
  });
};

exports.deleteEleve = async (id) => {
  try {
    await prisma.eleve.delete({
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

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Récupérer toutes les classes
exports.getAllClasse = async () => {
  return await prisma.classe.findMany();
};

// Récupérer une classe par id
exports.getClasseById = async (id) => {
  return await prisma.classe.findUnique({
    where: { id: id },
  });
};

// Créer une classe
exports.createClasse = async (classe) => {
  return await prisma.classe.create({
    data: {
      nom: classe.nom,
      profId: classe.profId,
    },
  });
};

// Mettre à jour une classe
exports.updateClasse = async (classe) => {
  return await prisma.classe.update({
    where: { id: classe.id },
    data: {
      nom: classe.nom,
      profId: classe.profId,
    },
  });
};

// Supprimer une classe
exports.deleteClasse = async (id) => {
  try {
    await prisma.classe.delete({
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

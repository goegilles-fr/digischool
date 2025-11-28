const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * @typedef {Object} ProfInput
 * @property {string} nom - Nom du professeur.
 * @property {string} prenom - Prénom du professeur.
 * @property {string} dateNaissance - Date de naissance sous forme de string,
 *   généralement au format "YYYY-MM-DD" (ou ISO complète).
 * @property {string} adresse - Adresse postale du professeur.
 * @property {string} sexe - Sexe du professeur ("M", "F", "Autre", etc.).
 */

/**
 * Récupère tous les professeurs en base.
 *
 * @async
 * @returns {Promise<Array<Object>>} Une promesse résolue avec un tableau de professeurs.
 */
exports.getAllProf = async () => {
    return await prisma.prof.findMany();
};

/**
 * Récupère un professeur par son identifiant.
 *
 * @async
 * @param {string} id - Identifiant du professeur (ObjectId sous forme de chaîne).
 * @returns {Promise<Object|null>} Une promesse résolue avec le professeur trouvé,
 * ou `null` s'il n'existe pas.
 */
exports.getProfById = async (id) => {
    return await prisma.prof.findUnique({
        where: { id: id },
    });
};

/**
 * Récupère le professeur affecté à une classe donnée.
 *
 * @async
 * @param {string} classeId - Identifiant de la classe (ObjectId sous forme de chaîne).
 * @returns {Promise<Object|null>} Une promesse résolue avec le professeur affecté,
 * ou `null` si la classe ou le professeur n'existent pas.
 */
exports.getProfByClasseId = async (classeId) => {
    const classe = await prisma.classe.findUnique({
        where: { id: classeId },
        select: {
            prof: true,
        }
    });

    return classe ? classe.prof : null;
};

/**
 * Crée un nouveau professeur en base.
 *
 * La conversion de la date de naissance en objet Date est réalisée ici
 * avant l'appel à Prisma.
 *
 * @async
 * @param {ProfInput} prof - Données du professeur à créer.
 * @returns {Promise<Object>} Une promesse résolue avec le professeur créé.
 */
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

/**
 * Met à jour un professeur existant en base.
 *
 * @async
 * @param {Object} prof - Données du professeur à mettre à jour, incluant l'identifiant.
 * @param {string} prof.id - Identifiant du professeur à mettre à jour.
 * @param {string} [prof.nom] - Nouveau nom du professeur.
 * @param {string} [prof.prenom] - Nouveau prénom du professeur.
 * @param {string} [prof.dateNaissance] - Nouvelle date de naissance ("YYYY-MM-DD" ou ISO).
 * @param {string} [prof.adresse] - Nouvelle adresse.
 * @param {string} [prof.sexe] - Nouveau sexe du professeur.
 * @returns {Promise<Object>} Une promesse résolue avec le professeur mis à jour.
 */
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

/**
 * Supprime un professeur par son identifiant.
 *
 * Renvoie un booléen pour distinguer :
 * - `true`  : suppression effectuée,
 * - `false` : professeur non trouvé (erreur Prisma P2025),
 * - lance l'erreur pour tout autre cas (erreur non gérée).
 *
 * @async
 * @param {string} id - Identifiant du professeur à supprimer.
 * @returns {Promise<boolean>} Une promesse résolue avec `true` si la suppression
 * a réussi, ou `false` si le professeur n'existait pas.
 * @throws {Error} Relance l'erreur si le code n'est pas P2025.
 */
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
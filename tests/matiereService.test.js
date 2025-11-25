const matiereRepository = require('../src/repositories/matiereRepository');
const matiereService = require('../src/services/matiereService');

jest.mock('../src/repositories/matiereRepository');

describe('MatiereService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    
    it('should get all matieres', async () => {
        const matieres = [
            {
                id: 1,
                nom: 'Matière 1'
            },
            {
                id: 2,
                nom: 'Matière 2'
            }
        ]

        matiereRepository.getAllMatieres.mockResolvedValueOnce(matieres);

        const results = await matiereService.getAllMatieres();

        expect(results).toEqual(matieres);
        expect(matiereRepository.getAllMatieres).toHaveBeenCalledTimes(1);
    });

    it("should find a matiere by id", async () => {
        const matiere = {
            id: "1",
            nom: 'Matière 1'
        };

        matiereRepository.getMatiereById.mockResolvedValueOnce(matiere);

        const results = await matiereService.getMatiereById("1");

        expect(results).toEqual(matiere);
        expect(matiereRepository.getMatiereById).toHaveBeenCalledTimes(1);
        expect(matiereRepository.getMatiereById).toHaveBeenCalledWith("1");
    });

    it("should create a matiere", async () => {
        const matiere = {
            id: "1",
            nom: 'Matière 1'
        };

        matiereRepository.createMatiere.mockResolvedValueOnce(matiere);

        const results = await matiereService.createMatiere(matiere);

        expect(results).toEqual(matiere);
        expect(matiereRepository.createMatiere).toHaveBeenCalledTimes(1);
        expect(matiereRepository.createMatiere).toHaveBeenCalledWith(matiere);
    });

    it("should update a matiere", async () => {
        const matiere = {
            id: "1",
            nom: 'Matière 1'
        };

        matiereRepository.updateMatiere.mockResolvedValueOnce(matiere);

        const results = await matiereService.updateMatiere("1", matiere);

        expect(results).toEqual(matiere);
        expect(matiereRepository.updateMatiere).toHaveBeenCalledTimes(1);
        expect(matiereRepository.updateMatiere).toHaveBeenCalledWith("1", matiere);
    });

    it("should delete a matiere", async () => {
        matiereRepository.deleteMatiere.mockResolvedValueOnce(true);

        const results = await matiereService.deleteMatiere("1");

        expect(results).toBe(true);
        expect(matiereRepository.deleteMatiere).toHaveBeenCalledTimes(1);
        expect(matiereRepository.deleteMatiere).toHaveBeenCalledWith("1");
    });
});
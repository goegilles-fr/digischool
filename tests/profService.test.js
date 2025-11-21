const profRepository = require('../src/repositories/profRepository');
const profService = require('../src/services/profService');

jest.mock('../src/repositories/profRepository');

describe('ProfService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return all profs', async () => {
        const profs = [
            { id: '1', nom: 'Doe', prenom: 'John' },
            { id: '2', nom: 'Smith', prenom: 'Jane' },
        ];
        
        profRepository.getAllProf.mockResolvedValue(profs);

        const result = await profService.getAllProf();

        expect(result).toEqual(profs);
        expect(profRepository.getAllProf).toHaveBeenCalledTimes(1);
    });

    test('should return a prof by id', async () => {
        const prof = { id: '1', nom: 'Doe', prenom: 'John' };

        profRepository.getProfById.mockResolvedValue(prof);

        const result = await profService.getProfById('1');

        expect(result).toEqual(prof);
        expect(profRepository.getProfById).toHaveBeenCalledTimes(1);
        expect(profRepository.getProfById).toHaveBeenCalledWith('1');
    });

    test('should create a prof', async () => {
        const prof = { id: '1', nom: 'Doe', prenom: 'John' };

        profRepository.createProf.mockResolvedValue(prof);

        const result = await profService.createProf(prof);

        expect(result).toEqual(prof);
        expect(profRepository.createProf).toHaveBeenCalledTimes(1);
    });

    test('should update a prof', async () => {
        const prof = { id: '1', nom: 'Doe', prenom: 'John' };

        profRepository.updateProf.mockResolvedValue(prof);

        const result = await profService.updateProf('1', prof);

        expect(result).toEqual(prof);
        expect(profRepository.updateProf).toHaveBeenCalledTimes(1);
        expect(profRepository.updateProf).toHaveBeenCalledWith({ ...prof, id: '1' });
    });

    test('should delete a prof', async () => {
        profRepository.deleteProf.mockResolvedValue(true);

        const result = await profService.deleteProf('1');

        expect(result).toEqual(true);
        expect(profRepository.deleteProf).toHaveBeenCalledTimes(1);
        expect(profRepository.deleteProf).toHaveBeenCalledWith('1');
    });
});
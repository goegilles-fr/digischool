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
});
const classeRepository = require('../src/repositories/classeRepository');
const classeService = require('../src/services/classeService');

jest.mock('../src/repositories/classeRepository');

describe('ClasseService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return all classes', async () => {
        const classes = [
            { id: '1', nom: 'Classe 1', profId: '1' },
            { id: '2', nom: 'Classe 2', profId: '2' },
        ];

        classeRepository.getAllClasse.mockResolvedValue(classes);

        const result = await classeService.getAllClasse();

        expect(result).toEqual(classes);
        expect(classeRepository.getAllClasse).toHaveBeenCalledTimes(1);
    });

    test('should return a classe by id', async () => {
        const classe = { id: '1', nom: 'Classe 1', profId: '1' };

        classeRepository.getClasseById.mockResolvedValue(classe);

        const result = await classeService.getClasseById('1');

        expect(result).toEqual(classe);
        expect(classeRepository.getClasseById).toHaveBeenCalledTimes(1);
        expect(classeRepository.getClasseById).toHaveBeenCalledWith('1');
    });

    test('should create a classe', async () => {
        const classe = { id: '1', nom: 'Classe 1', profId: '1' };

        classeRepository.createClasse.mockResolvedValue(classe);

        const result = await classeService.createClasse(classe);

        expect(result).toEqual(classe);
        expect(classeRepository.createClasse).toHaveBeenCalledTimes(1);
    });

    test('should update a classe', async () => {
        const classe = { id: '1', nom: 'Classe 1', profId: '1' };

        classeRepository.updateClasse.mockResolvedValue(classe);

        const result = await classeService.updateClasse('1', classe);

        expect(result).toEqual(classe);
        expect(classeRepository.updateClasse).toHaveBeenCalledTimes(1);
        expect(classeRepository.updateClasse).toHaveBeenCalledWith({ ...classe, id: '1' });
    });

    test('should delete a classe', async () => {
        classeRepository.deleteClasse.mockResolvedValue(true);

        const result = await classeService.deleteClasse('1');

        expect(result).toEqual(true);
        expect(classeRepository.deleteClasse).toHaveBeenCalledTimes(1);
        expect(classeRepository.deleteClasse).toHaveBeenCalledWith('1');
    });
});
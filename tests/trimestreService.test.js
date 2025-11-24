const trimestreRepository = require('../src/repositories/trimestreRepository');
const trimestreService = require('../src/services/trimestreService');

jest.mock('../src/repositories/trimestreRepository');

describe('TrimestreService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('devrait retourner tous les trimestres', async () => {
        const trimestres = [
            { id: '1', nom: 'TRIM01', date: new Date('2023-12-01') },
            { id: '2', nom: 'TRIM02', date: new Date('2024-03-08') },
        ];
        
        trimestreRepository.getAllTrimestres.mockResolvedValue(trimestres);

        const result = await trimestreService.getAllTrimestres();

        expect(result).toEqual(trimestres);
        expect(trimestreRepository.getAllTrimestres).toHaveBeenCalledTimes(1);
    });

    test('devrait retourner un trimestre par id', async () => {
        const trimestre = { id: '1', nom: 'TRIM01', date: new Date('2023-12-01') };

        trimestreRepository.getTrimestreById.mockResolvedValue(trimestre);

        const result = await trimestreService.getTrimestreById('1');

        expect(result).toEqual(trimestre);
        expect(trimestreRepository.getTrimestreById).toHaveBeenCalledTimes(1);
        expect(trimestreRepository.getTrimestreById).toHaveBeenCalledWith('1');
    });

    test('devrait créer un trimestre', async () => {
        const datas = { nom: 'TRIM01', date: '2023-12-01' };
        const trimestreAttendu = { id: '1', nom: 'TRIM01', date: new Date('2023-12-01') };

        trimestreRepository.createTrimestre.mockResolvedValue(trimestreAttendu);

        const result = await trimestreService.createTrimestre(datas);

        expect(result).toEqual(trimestreAttendu);
        expect(trimestreRepository.createTrimestre).toHaveBeenCalledTimes(1);
        expect(trimestreRepository.createTrimestre).toHaveBeenCalledWith({
            nom: datas.nom,
            date: new Date(datas.date)
        });
    });

    test('devrait mettre à jour un trimestre', async () => {
        const datas = { nom: 'TRIM01', date: '2023-12-01' };
        const trimestreAttendu = { id: '1', nom: 'TRIM01', date: new Date('2023-12-01') };

        trimestreRepository.updateTrimestre.mockResolvedValue(trimestreAttendu);

        const result = await trimestreService.updateTrimestre('1', datas);

        expect(result).toEqual(trimestreAttendu);
        expect(trimestreRepository.updateTrimestre).toHaveBeenCalledTimes(1);
        expect(trimestreRepository.updateTrimestre).toHaveBeenCalledWith('1', {
            nom: datas.nom,
            date: new Date(datas.date)
        });
    });

    test('devrait supprimer un trimestre', async () => {
        trimestreRepository.deleteTrimestre.mockResolvedValue(true);

        const result = await trimestreService.deleteTrimestre('1');

        expect(result).toEqual(true);
        expect(trimestreRepository.deleteTrimestre).toHaveBeenCalledTimes(1);
        expect(trimestreRepository.deleteTrimestre).toHaveBeenCalledWith('1');
    });
});
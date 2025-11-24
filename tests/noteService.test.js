const noteRepository = require('../src/repositories/noteRepository');
const noteService = require('../src/services/noteService');

jest.mock('../src/repositories/noteRepository');

describe('NoteService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('devrait retourner toutes les notes', async () => {
        const notes = [
            { 
                id: '1', 
                date_saisie: new Date('2019-10-15'), 
                eleveId: 'e1', 
                classeId: 'c1', 
                matiereId: 'm1', 
                profId: 'p1', 
                trimestreId: 't1', 
                note: 12, 
                avis: 'Travail à approfondir', 
                avancement: 0.5 
            },
            { 
                id: '2', 
                date_saisie: new Date('2019-11-15'), 
                eleveId: 'e2', 
                classeId: 'c2', 
                matiereId: 'm2', 
                profId: 'p2', 
                trimestreId: 't2', 
                note: 15, 
                avis: 'Bon travail', 
                avancement: 0.8 
            },
        ];
        
        noteRepository.getAllNotes.mockResolvedValue(notes);

        const result = await noteService.getAllNotes();

        expect(result).toEqual(notes);
        expect(noteRepository.getAllNotes).toHaveBeenCalledTimes(1);
    });

    test('devrait retourner une note par id', async () => {
        const note = { 
            id: '1', 
            date_saisie: new Date('2019-10-15'), 
            eleveId: 'e1', 
            classeId: 'c1', 
            matiereId: 'm1', 
            profId: 'p1', 
            trimestreId: 't1', 
            note: 12, 
            avis: 'Travail à approfondir', 
            avancement: 0.5 
        };

        noteRepository.getNoteById.mockResolvedValue(note);

        const result = await noteService.getNoteById('1');

        expect(result).toEqual(note);
        expect(noteRepository.getNoteById).toHaveBeenCalledTimes(1);
        expect(noteRepository.getNoteById).toHaveBeenCalledWith('1');
    });

    test('devrait créer une note', async () => {
        const datas = {
            date_saisie: '2019-10-15',
            eleveId: 'e1',
            classeId: 'c1',
            matiereId: 'm1',
            profId: 'p1',
            trimestreId: 't1',
            note: '12',
            avis: 'Travail à approfondir',
            avancement: 0.5
        };
        
        const noteAttendue = { 
            id: '1', 
            date_saisie: new Date('2019-10-15'), 
            eleveId: 'e1', 
            classeId: 'c1', 
            matiereId: 'm1', 
            profId: 'p1', 
            trimestreId: 't1', 
            note: 12, 
            avis: 'Travail à approfondir', 
            avancement: 0.5 
        };

        noteRepository.createNote.mockResolvedValue(noteAttendue);

        const result = await noteService.createNote(datas);

        expect(result).toEqual(noteAttendue);
        expect(noteRepository.createNote).toHaveBeenCalledTimes(1);
        expect(noteRepository.createNote).toHaveBeenCalledWith({
            date_saisie: new Date(datas.date_saisie),
            eleveId: datas.eleveId,
            classeId: datas.classeId,
            matiereId: datas.matiereId,
            profId: datas.profId,
            trimestreId: datas.trimestreId,
            note: 12,
            avis: datas.avis,
            avancement: datas.avancement
        });
    });

    test('devrait créer une note sans avis ni avancement', async () => {
        const datas = {
            date_saisie: '2019-10-15',
            eleveId: 'e1',
            classeId: 'c1',
            matiereId: 'm1',
            profId: 'p1',
            trimestreId: 't1',
            note: '12'
        };
        
        const noteAttendue = { 
            id: '1', 
            date_saisie: new Date('2019-10-15'), 
            eleveId: 'e1', 
            classeId: 'c1', 
            matiereId: 'm1', 
            profId: 'p1', 
            trimestreId: 't1', 
            note: 12, 
            avis: null, 
            avancement: null 
        };

        noteRepository.createNote.mockResolvedValue(noteAttendue);

        const result = await noteService.createNote(datas);

        expect(result).toEqual(noteAttendue);
        expect(noteRepository.createNote).toHaveBeenCalledTimes(1);
        expect(noteRepository.createNote).toHaveBeenCalledWith({
            date_saisie: new Date(datas.date_saisie),
            eleveId: datas.eleveId,
            classeId: datas.classeId,
            matiereId: datas.matiereId,
            profId: datas.profId,
            trimestreId: datas.trimestreId,
            note: 12,
            avis: null,
            avancement: null
        });
    });

    test('devrait mettre à jour une note', async () => {
        const datas = {
            date_saisie: '2019-10-15',
            eleveId: 'e1',
            classeId: 'c1',
            matiereId: 'm1',
            profId: 'p1',
            trimestreId: 't1',
            note: '15',
            avis: 'Excellent travail',
            avancement: 0.9
        };
        
        const noteAttendue = { 
            id: '1', 
            date_saisie: new Date('2019-10-15'), 
            eleveId: 'e1', 
            classeId: 'c1', 
            matiereId: 'm1', 
            profId: 'p1', 
            trimestreId: 't1', 
            note: 15, 
            avis: 'Excellent travail', 
            avancement: 0.9 
        };

        noteRepository.updateNote.mockResolvedValue(noteAttendue);

        const result = await noteService.updateNote('1', datas);

        expect(result).toEqual(noteAttendue);
        expect(noteRepository.updateNote).toHaveBeenCalledTimes(1);
        expect(noteRepository.updateNote).toHaveBeenCalledWith('1', {
            date_saisie: new Date(datas.date_saisie),
            eleveId: datas.eleveId,
            classeId: datas.classeId,
            matiereId: datas.matiereId,
            profId: datas.profId,
            trimestreId: datas.trimestreId,
            note: 15,
            avis: datas.avis,
            avancement: datas.avancement
        });
    });

    test('devrait supprimer une note', async () => {
        noteRepository.deleteNote.mockResolvedValue(true);

        const result = await noteService.deleteNote('1');

        expect(result).toEqual(true);
        expect(noteRepository.deleteNote).toHaveBeenCalledTimes(1);
        expect(noteRepository.deleteNote).toHaveBeenCalledWith('1');
    });
});
const noteRepository = require('../repositories/noteRepository');

exports.getAllNotes = async () => {
    const notes = await noteRepository.getAllNotes();
    return notes;
};

exports.getNoteById = async (id) => {
    const note = await noteRepository.getNoteById(id);
    return note;
};

exports.createNote = async (datas) => {
    const note = {
        date_saisie: new Date(datas.date_saisie),
        eleveId: datas.eleveId,
        classeId: datas.classeId,
        matiereId: datas.matiereId,
        profId: datas.profId,
        trimestreId: datas.trimestreId,
        note: parseFloat(datas.note),
        avis: datas.avis || null,
        avancement: datas.avancement || null
    };
    const createdNote = await noteRepository.createNote(note);
    return createdNote;
};

exports.updateNote = async (id, datas) => {
    const note = {
        date_saisie: new Date(datas.date_saisie),
        eleveId: datas.eleveId,
        classeId: datas.classeId,
        matiereId: datas.matiereId,
        profId: datas.profId,
        trimestreId: datas.trimestreId,
        note: parseFloat(datas.note),
        avis: datas.avis || null,
        avancement: datas.avancement || null
    };
    const updatedNote = await noteRepository.updateNote(id, note);
    return updatedNote;
};

exports.deleteNote = async (id) => {
    const deletedNote = await noteRepository.deleteNote(id);
    return deletedNote;
};
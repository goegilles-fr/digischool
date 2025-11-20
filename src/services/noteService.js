const Note = require('../models/Note');
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
    let note = new Note(datas.idnotes, datas.date_saisie, datas.ideleve, datas.idclasse, datas.idmatiere, datas.idprof, datas.idtrimestre, datas.note, datas.avis, datas.avancement);
    const createdNote = await noteRepository.createNote(note);
    return createdNote;
};

exports.updateNote = async (id, datas) => {
    let note = new Note(datas.idnotes, datas.date_saisie, datas.ideleve, datas.idclasse, datas.idmatiere, datas.idprof, datas.idtrimestre, datas.note, datas.avis, datas.avancement);
    const updatedNote = await noteRepository.updateNote(id, note);
    return updatedNote;
};

exports.deleteNote = async (id) => {
    const deletedNote = await noteRepository.deleteNote(id);
    return deletedNote;
};
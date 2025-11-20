const noteService = require('../services/noteService');

exports.getAllNotes = async (req, res) => {
    const notes = await noteService.getAllNotes();
    res.status(200).json(notes);
}

exports.getNoteById = async (req, res) => {
    const id = parseInt(req.params.id);
    const note = await noteService.getNoteById(id);
    res.status(200).json(note);
}

exports.createNote = async (req, res) => {
    const note = req.body;
    const createdNote = await noteService.createNote(note);
    res.status(201).json(createdNote);
}

exports.updateNote = async (req, res) => {
    const id = parseInt(req.params.id);
    const note = req.body;
    const updatedNote = await noteService.updateNote(id, note);
    res.status(200).json(updatedNote);
}

exports.deleteNote = async (req, res) => {
    const id = parseInt(req.params.id);
    const deletedNote = await noteService.deleteNote(id);
    res.status(200).json(deletedNote);
}
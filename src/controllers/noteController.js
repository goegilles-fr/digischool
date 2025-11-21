const noteService = require('../services/noteService');

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await noteService.getAllNotes();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNoteById = async (req, res) => {
    try {
        const id = req.params.id;
        const note = await noteService.getNoteById(id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createNote = async (req, res) => {
    try {
        const note = req.body;
        const createdNote = await noteService.createNote(note);
        res.status(201).json(createdNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateNote = async (req, res) => {
    try {
        const id = req.params.id;
        const note = req.body;
        const updatedNote = await noteService.updateNote(id, note);
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedNote = await noteService.deleteNote(id);
        res.status(200).json(deletedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
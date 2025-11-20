let notes = [];

exports.getAllNotes = async () => {
    return notes;
};

exports.getNoteById = async (id) => {
    return notes.find(note => note.idnotes === id);
};

exports.createNote = async (note) => {
    notes.push(note);
    return note;
};

exports.updateNote = async (id, note) => {
    const index = notes.findIndex(note => note.idnotes === id);
    if (index !== -1) {
        notes[index] = note;
        return note;
    }
    return null;
};

exports.deleteNote = async (id) => {
    const index = notes.findIndex(note => note.idnotes === id);
    if (index !== -1) {
        notes.splice(index, 1);
        return true;
    }
    return false;
};
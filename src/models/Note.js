class Note {
    constructor(idnotes, date_saisie, ideleve, idclasse, idmatiere, idprof, idtrimestre, note, avis, avancement) {
        this.idnotes = idnotes;
        this.date_saisie = date_saisie;
        this.ideleve = ideleve;
        this.idclasse = idclasse;
        this.idmatiere = idmatiere;
        this.idprof = idprof;
        this.idtrimestre = idtrimestre;
        this.note = note;
        this.avis = avis;
        this.avancement = avancement;
    }

    // Getter pour idnotes
    getIdNotes() {
        return this.idnotes;
    }

    // Setter pour idnotes
    setIdNotes(idnotes) {
        this.idnotes = idnotes;
    }

    // Getter pour date_saisie
    getDateSaisie() {
        return this.date_saisie;
    }

    // Setter pour date_saisie
    setDateSaisie(date_saisie) {
        this.date_saisie = date_saisie;
    }

    // Getter pour ideleve
    getIdEleve() {
        return this.ideleve;
    }

    // Setter pour ideleve
    setIdEleve(ideleve) {
        this.ideleve = ideleve;
    }

    // Getter pour idclasse
    getIdClasse() {
        return this.idclasse;
    }

    // Setter pour idclasse
    setIdClasse(idclasse) {
        this.idclasse = idclasse;
    }

    // Getter pour idmatiere
    getIdMatiere() {
        return this.idmatiere;
    }

    // Setter pour idmatiere
    setIdMatiere(idmatiere) {
        this.idmatiere = idmatiere;
    }

    // Getter pour idprof
    getIdProf() {
        return this.idprof;
    }

    // Setter pour idprof
    setIdProf(idprof) {
        this.idprof = idprof;
    }

    // Getter pour idtrimestre
    getIdTrimestre() {
        return this.idtrimestre;
    }

    // Setter pour idtrimestre
    setIdTrimestre(idtrimestre) {
        this.idtrimestre = idtrimestre;
    }

    // Getter pour note
    getNote() {
        return this.note;
    }

    // Setter pour note
    setNote(note) {
        this.note = note;
    }

    // Getter pour avis
    getAvis() {
        return this.avis;
    }

    // Setter pour avis
    setAvis(avis) {
        this.avis = avis;
    }

    // Getter pour avancement
    getAvancement() {
        return this.avancement;
    }

    // Setter pour avancement
    setAvancement(avancement) {
        this.avancement = avancement;
    }
}

module.exports = Note;
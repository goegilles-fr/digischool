class Trimestre {
    constructor(idtrimestre, nom, date) {
        this.idtrimestre = idtrimestre;
        this.nom = nom;
        this.date = date;
    }

    // Getter pour idtrimestre
    getIdTrimestre() {
        return this.idtrimestre;
    }

    // Setter pour idtrimestre
    setIdTrimestre(idtrimestre) {
        this.idtrimestre = idtrimestre;
    }

    // Getter pour nom
    getNom() {
        return this.nom;
    }

    // Setter pour nom
    setNom(nom) {
        this.nom = nom;
    }

    // Getter pour date
    getDate() {
        return this.date;
    }

    // Setter pour date
    setDate(date) {
        this.date = date;
    }
}

module.exports = Trimestre;
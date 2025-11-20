class Eleve {
    constructor(id, nom, prenom, classe, date_naissance, adresse, sexe){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.classe = classe;
        this.date_naissance = date_naissance;
        this.adresse = adresse;
        this.sexe = sexe;
    }
    
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNom() {
        return this.nom;
    }

    setNom(nom) {
        this.nom = nom;
    }

    getPrenom() {
        return this.prenom;
    }

    setPrenom(prenom) {
        this.prenom = prenom;
    }

    getClasse() {
        return this.classe;
    }

    setClasse(classe) {
        this.classe = classe;
    }

    getDateNaissance() {
        return this.date_naissance;
    }

    setDateNaissance(date_naissance) {
        this.date_naissance = date_naissance;
    }

    getAdresse() {
        return this.adresse;
    }

    setAdresse(adresse) {
        this.adresse = adresse;
    }

    getSexe() {
        return this.sexe;
    }

    setSexe(sexe) {
        this.sexe = sexe;
    }
}
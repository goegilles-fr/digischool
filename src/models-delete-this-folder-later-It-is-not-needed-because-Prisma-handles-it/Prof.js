class Prof{
    constructor({ id, nom, prenom, dateNaissance, adresse, sexe }){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.adresse = adresse;
        this.sexe = sexe;
    }

    static fromPayload(payload){
        const id = payload.id !== undefined ? Number(payload.id) : undefined;
        if(id !== undefined && Number.isNaN(id)) return null;

        return new Prof({
            id: id,
            nom: payload.nom,
            prenom: payload.prenom,
            dateNaissance: payload.dateNaissance,
            adresse: payload.adresse,
            sexe: payload.sexe
        });
    }

    static fromPersistence(raw){
        const id = raw.id !== undefined ? Number(raw.id) : undefined;

        return new Prof({
            id: id,
            nom: raw.nom,
            prenom: raw.prenom,
            dateNaissance: raw.dateNaissance,
            adresse: raw.adresse,
            sexe: raw.sexe
        });
    }

    getNomComplet(){
        return `${this.nom} ${this.prenom}`;
    }

    toJSON(){
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            dateNaissance: this.dateNaissance,
            adresse: this.adresse,
            sexe: this.sexe
        };
    }
}

module.exports = Prof;
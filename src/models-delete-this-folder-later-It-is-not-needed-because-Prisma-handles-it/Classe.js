class Classe{
    constructor({ id, nom, profId }){
        this.id = id;
        this.nom = nom;
        this.profId = profId;
    }

    static fromPayload(payload){
        const id = payload.id !== undefined ? Number(payload.id) : undefined;
        if(id !== undefined && Number.isNaN(id)) return null;

        const profId = payload.profId !== undefined ? Number(payload.profId) : undefined;
        if(profId !== undefined && Number.isNaN(profId)) return null;

        return new Classe({
            id: id,
            nom: payload.nom,
            profId: profId
        });
    }

    static fromPersistence(raw){
        const id = raw.id !== undefined ? Number(raw.id) : undefined;
        const profId = raw.profId !== undefined ? Number(raw.profId) : undefined;

        return new Classe({
            id: id,
            nom: raw.nom,
            profId: profId
        });
    }

    toJSON(){
        return {
            id: this.id,
            nom: this.nom,
            profId: this.profId
        };
    }
}

module.exports = Classe;
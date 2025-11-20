class Matiere{
    constructor(id, nom){
        this.id = id;
        this.nom = nom;
    }
    
    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
    }

    getNom(){
        return this.nom;
    }

    setNom(nom){
        this.nom = nom;
    }
}
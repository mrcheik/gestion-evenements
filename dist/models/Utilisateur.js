export class Utilisateur {
    constructor(nom, email) {
        this.nom = nom;
        this.email = email;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
}

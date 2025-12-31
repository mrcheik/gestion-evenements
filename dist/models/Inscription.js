export class Inscription {
    constructor(utilisateur, evenement) {
        this.utilisateur = utilisateur;
        this.evenement = evenement;
    }
    getUtilisateur() {
        return this.utilisateur;
    }
    getEvenement() {
        return this.evenement;
    }
}

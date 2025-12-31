export class Evenement {
    constructor(titre, description, date, localisation, categorie, nombreMaxPlaces) {
        this.statut = "";
        this.nombreEnregistre = 0;
        this.titre = titre;
        this.description = description;
        this.date = date;
        this.localisation = localisation;
        this.categorie = categorie;
        this.nombreMaxPlaces = nombreMaxPlaces;
    }
    getStatut() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        this.date.setHours(0, 0, 0, 0);
        this.statut = this.date >= today ? "En cours" : "Terminé";
        return this.statut;
    }
    // Getters
    getTitre() {
        return this.titre;
    }
    getDescription() {
        return this.description;
    }
    getDate() {
        return this.date;
    }
    getLocalisation() {
        return this.localisation;
    }
    getCategorie() {
        return this.categorie;
    }
    getNombreMaxPlaces() {
        return this.nombreMaxPlaces;
    }
    getNombreInscrits() {
        return this.nombreEnregistre;
    }
    // Setters
    setTitre(titre) {
        this.titre = titre;
    }
    setDescription(description) {
        this.description = description;
    }
    addUtilisateur() {
        this.nombreEnregistre++;
    }
    setDate(date) {
        this.date = date;
    }
    setLocalisation(localisation) {
        this.localisation = localisation;
    }
    setCategorie(categorie) {
        this.categorie = categorie;
    }
    setNombreMaxPlaces(nombreMaxPlaces) {
        this.nombreMaxPlaces = nombreMaxPlaces;
    }
    estPlein() {
        return this.nombreEnregistre == this.nombreMaxPlaces;
    }
}

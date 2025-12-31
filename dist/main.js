import { Fonctions } from "./services/Fonctions.js";
import { Evenement } from "./models/Evenement.js";
import { Utilisateur } from "./models/Utilisateur.js";
import { GestionEvenement } from "./services/GestionEvenement.js";
function verifierEmailSaintJean(email) {
    const domaineAutorise = "@saintjeaningenieur.org";
    return email.endsWith(domaineAutorise);
}
const listeEvenement = document.getElementById("events-grid");
function renderEvenements() {
    if (!listeEvenement)
        return;
    listeEvenement.innerHTML = "";
    for (const e of GestionEvenement.getListeEvenement()) {
        const eventItem = document.createElement("article");
        eventItem.className = "event-card";
        eventItem.innerHTML = `
      <h3>${e.getTitre()}</h3>
      <span class="category">${e.getCategorie()}</span>
      <p class="description">${e.getDescription()}</p>
      <ul>
        <li><strong>Date :</strong> ${e.getDate().toLocaleDateString()}</li>
        <li><strong>Lieu :</strong> ${e.getLocalisation()}</li>
        <li><strong>Places :</strong> ${e.getNombreMaxPlaces() - e.getNombreInscrits()}</li>
        <li><strong>Statut :</strong> ${e.getStatut()}</li>
      </ul>
    `;
        listeEvenement.appendChild(eventItem);
    }
}
const searchInput = document.getElementById("search-container");
searchInput.addEventListener("input", (e) => {
    const valeur = searchInput.value.toLowerCase();
    listeEvenement.innerHTML = "";
    for (const e of GestionEvenement.getListeEvenement()) {
        if (e.getCategorie().toLowerCase().includes(valeur)) {
            const eventItem = document.createElement("article");
            eventItem.className = "event-card";
            eventItem.innerHTML = `
	      <h3>${e.getTitre()}</h3>
	      <span class="category">${e.getCategorie()}</span>
	      <p class="description">${e.getDescription()}</p>
	      <ul>
	        <li><strong>Date :</strong> ${e.getDate().toLocaleDateString()}</li>
	        <li><strong>Lieu :</strong> ${e.getLocalisation()}</li>
	        <li><strong>Places :</strong> ${e.getNombreMaxPlaces() - e.getNombreInscrits()}</li>
	        <li><strong>Statut :</strong> ${e.getStatut()}</li>
	      </ul>
	    `;
            listeEvenement.appendChild(eventItem);
        }
    }
});
const formEvent = document.getElementById("add-event-form");
formEvent.addEventListener("submit", (e) => {
    e.preventDefault();
    const titre = document.getElementById("titre");
    const description = document.getElementById("description");
    const date = document.getElementById("date");
    const lieu = document.getElementById("lieu");
    const categorie = document.getElementById("categorie");
    const nombrePlace = document.getElementById("nombrePlace");
    const nbrePlace = Number(nombrePlace.value);
    let evenement = new Evenement(titre.value, description.value, new Date(date.value), lieu.value, categorie.value, nbrePlace);
    Fonctions.ajouterEvenement(evenement);
    localStorage.setItem("events", JSON.stringify(GestionEvenement.getListeEvenement()));
    renderEvenements();
});
const formInsc = document.getElementById("register-form");
formInsc.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomUtilisateur = document.getElementById("nomUtil");
    const adresseUtilisateur = document.getElementById("adresse-email");
    const nomEvent = document.getElementById("nomEvent");
    if (verifierEmailSaintJean(adresseUtilisateur.value)) {
        let utilisateur = new Utilisateur(nomUtilisateur.value, adresseUtilisateur.value);
        Fonctions.inscrire(nomEvent.value, utilisateur);
        renderEvenements();
    }
    else {
        alert("Entre l'adresse mail institutionnelle");
    }
});

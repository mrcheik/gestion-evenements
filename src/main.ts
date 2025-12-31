import { Fonctions } from "./services/Fonctions.js";
import { Evenement } from "./models/Evenement.js";
import { Utilisateur } from "./models/Utilisateur.js";
import { Inscription } from "./models/Inscription.js";
import { GestionEvenement } from "./services/GestionEvenement.js";

function verifierEmailSaintJean(email: string) {
  const domaineAutorise = "@saintjeaningenieur.org";
  return email.endsWith(domaineAutorise);
}

const listeEvenement = document.getElementById("events-grid")!;

function renderEvenements(): void {

  if (!listeEvenement) return;

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

const searchInput = document.getElementById("search-container")! as HTMLInputElement;
	
	searchInput.addEventListener("input", (e) =>{
	const valeur = searchInput.value.toLowerCase();
	listeEvenement.innerHTML = "";

  for (const e of GestionEvenement.getListeEvenement()) {
  	
  	if(e.getCategorie().toLowerCase().includes(valeur)){
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

})



const formEvent = document.getElementById("add-event-form")!;

formEvent.addEventListener("submit", (e)=> {

	e.preventDefault();
	const titre = document.getElementById("titre")! as HTMLInputElement;
	const description = document.getElementById("description")! as HTMLInputElement;
	const date = document.getElementById("date")! as HTMLInputElement;
	const lieu = document.getElementById("lieu")! as HTMLInputElement;
	const categorie = document.getElementById("categorie")! as HTMLInputElement;
	const nombrePlace = document.getElementById("nombrePlace")! as HTMLInputElement;

	const nbrePlace = Number(nombrePlace.value);
	let evenement: Evenement = new Evenement(
		titre.value, 
		description.value, 
		new Date(date.value), 
		lieu.value, 
		categorie.value, 
		nbrePlace);

	Fonctions.ajouterEvenement(evenement);
	localStorage.setItem("events", JSON.stringify(GestionEvenement.getListeEvenement()));
	renderEvenements();

});

const formInsc = document.getElementById("register-form")!;

formInsc.addEventListener("submit", (e)=> {

	e.preventDefault();
	const nomUtilisateur = document.getElementById("nomUtil")! as HTMLInputElement;
	const adresseUtilisateur = document.getElementById("adresse-email")! as HTMLInputElement;
	const nomEvent = document.getElementById("nomEvent")! as HTMLInputElement;

	if (verifierEmailSaintJean(adresseUtilisateur.value)) {
	  let utilisateur: Utilisateur = new Utilisateur(
			nomUtilisateur.value,adresseUtilisateur.value
		);
		Fonctions.inscrire(nomEvent.value,utilisateur);
		renderEvenements();

	} else {
	  alert("Entre l'adresse mail institutionnelle");

	}

});

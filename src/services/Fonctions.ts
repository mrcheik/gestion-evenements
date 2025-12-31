import { Inscription } from "../models/Inscription.js";
import { Utilisateur } from "../models/Utilisateur.js";
import { Evenement } from "../models/Evenement.js";
import { GestionUtilisateur } from "./GestionUtilisateurs.js";
import { GestionEvenement } from "./GestionEvenement.js";
import { GestionInscription } from "./GestionInscriptions.js";

const messageEvent = document.getElementById("message-evenement")!;
const messageInsc = document.getElementById("message-inscription")!;

export class Fonctions{

	public static ajouterUtilisateur(utilisateur: Utilisateur): void{

		for(const n of GestionUtilisateur.getListeUtilisateurs()){

			if(utilisateur.getEmail() === n.getEmail()){

				return 

			}

		}

		GestionUtilisateur.listeUtilisateurs.push(utilisateur);
		return 

	}

	public static ajouterEvenement(evenement: Evenement): void{

		for(const n of GestionEvenement.getListeEvenement()){

			if(evenement.getTitre() == n.getTitre()){

				messageEvent.textContent = "Cet événement existe déjà";
				setTimeout(()=> {
					messageEvent.textContent = "";
				},3000);
				return

			}

		}

		GestionEvenement.listeEvenement.push(evenement);
		messageEvent.textContent = "Evénement ajouté";
		setTimeout(()=> {
			messageEvent.textContent = "";
		},3000);
		return

	}

	public static inscrire(titre: string, utilisateur: Utilisateur){

		if(GestionEvenement.getListeEvenement().length === 0){

			messageInsc.textContent = "Aucun événement enregistré";
			setTimeout(()=> {
				messageInsc.textContent = "";
			},3000);
			return

		}

		for(const e of GestionEvenement.getListeEvenement()){

			if(e.getTitre().trim().toLowerCase() === titre.trim().toLowerCase()){

				if(e.getStatut().toLowerCase().includes("terminé")){

					messageInsc.textContent = "Cet événement est déjà passé";
					setTimeout(()=> {
						messageInsc.textContent = "";
					},3000);
					return

				}

				if(e.estPlein()){

					messageInsc.textContent = "Cet événement est plein";
					setTimeout(()=> {
						messageInsc.textContent = "";
					},3000);
					return

				}

				for(const i of GestionInscription.getListeInscription()){

					if(i.getEvenement() === e){

						if(i.getUtilisateur().getEmail() === utilisateur.getEmail()){

							messageInsc.textContent = "Vous êtes déjà enregistré à cet événement";
							setTimeout(()=> {
								messageInsc.textContent = "";
							},3000);
							return

						}

					}
					
				}
				this.ajouterUtilisateur(utilisateur);
				GestionInscription.listeInscription.push(new Inscription(utilisateur,e))
				e.addUtilisateur();
				messageInsc.textContent = "Enregistrement terminé";
				setTimeout(()=> {
					messageInsc.textContent = "";
				},3000);
				return

			}
		}
		messageInsc.textContent = "Cet événement n'existe pas";
		setTimeout(()=> {
			messageInsc.textContent = "";
		},3000);
		return

	}

}
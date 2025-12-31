import { Utilisateur } from "./Utilisateur.js";
import { Evenement } from "./Evenement.js";

export class Inscription{


	private utilisateur: Utilisateur;
	private evenement: Evenement;

	constructor(utilisateur: Utilisateur, evenement: Evenement){
		this.utilisateur = utilisateur;
		this.evenement = evenement;
	}

	public getUtilisateur(): Utilisateur{
		return this.utilisateur;
	}

	public getEvenement(): Evenement{
		return this.evenement;
	}

}
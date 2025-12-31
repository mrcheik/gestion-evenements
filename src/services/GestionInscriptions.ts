import { Inscription } from "../models/Inscription.js";
import { Utilisateur } from "../models/Utilisateur.js";
import { Evenement } from "../models/Evenement.js";
import { GestionUtilisateur } from "./GestionUtilisateurs.js";
import { GestionEvenement } from "./GestionEvenement.js";

export class GestionInscription{

	public static listeInscription: Inscription[] = [];

	constructor(){}

	public static getListeInscription(): Inscription[]{

		return GestionInscription.listeInscription;

	}
}
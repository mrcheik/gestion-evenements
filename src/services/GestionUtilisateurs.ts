import { Utilisateur } from "../models/Utilisateur.js";

export class GestionUtilisateur{

	public static listeUtilisateurs: Utilisateur[] = [];

	constructor(){};

	public static getListeUtilisateurs(): Utilisateur[]{

		return GestionUtilisateur.listeUtilisateurs;

	}

	

}
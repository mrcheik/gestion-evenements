import { Evenement } from "../models/Evenement.js";

export class GestionEvenement{

	public static listeEvenement: Evenement[] = [];

	constructor(){}

	public static getListeEvenement(): Evenement[]{
		return GestionEvenement.listeEvenement;
	}


}
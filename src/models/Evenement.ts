export class Evenement {
  private titre: string;
  private description: string;
  private date: Date;
  private localisation: string;
  private categorie: string;
  private nombreMaxPlaces: number;
  private statut: string = "";
  private nombreEnregistre: number = 0;

  constructor(
    titre: string,
    description: string,
    date: Date,
    localisation: string,
    categorie: string,
    nombreMaxPlaces: number
  ) {
    this.titre = titre;
    this.description = description;
    this.date = date;
    this.localisation = localisation;
    this.categorie = categorie;
    this.nombreMaxPlaces = nombreMaxPlaces;
  }

  public getStatut(): string{

    const today = new Date();
    today.setHours(0,0,0,0);
    this.date.setHours(0,0,0,0);
    this.statut = this.date >= today? "En cours" : "Terminé";

    return this.statut;

  }

  // Getters
  public getTitre(): string {
    return this.titre;
  }

  public getDescription(): string {
    return this.description;
  }

  public getDate(): Date {
    return this.date;
  }

  public getLocalisation(): string {
    return this.localisation;
  }

  public getCategorie(): string {
    return this.categorie;
  }

  public getNombreMaxPlaces(): number {
    return this.nombreMaxPlaces;
  }

  public getNombreInscrits(): number{
    return this.nombreEnregistre;
  }


  // Setters
  public setTitre(titre: string): void {
    this.titre = titre;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public addUtilisateur(): void{
    this.nombreEnregistre++;
  }

  public setDate(date: Date): void {
    this.date = date;
  }

  public setLocalisation(localisation: string): void {
    this.localisation = localisation;
  }

  public setCategorie(categorie: string): void {
    this.categorie = categorie;
  }

  public setNombreMaxPlaces(nombreMaxPlaces: number): void {
    this.nombreMaxPlaces = nombreMaxPlaces;
  }

  public estPlein(): boolean{
    return this.nombreEnregistre == this.nombreMaxPlaces;
  }
}

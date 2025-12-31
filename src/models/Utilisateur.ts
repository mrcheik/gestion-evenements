export class Utilisateur {

  private nom: string;
  private email: string;

  constructor(nom: string, email: string) {
    this.nom = nom;
    this.email = email;
  }


  public getNom(): string {
    return this.nom;
  }

  public setNom(nom: string): void {
    this.nom = nom;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }
}

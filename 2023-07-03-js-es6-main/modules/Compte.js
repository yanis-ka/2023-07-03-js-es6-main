export default  class Compte{
    constructor(nom, prenom, solde){
        this.nom = nom;
        this.prenom = prenom;
        this.solde = solde;
    }

    afficherSolde(){
        return `Solde ${ (this.solde >= 0)? 'crediteur': 'débiteur' } : ${this.solde}€`;
    }

    retirerDeLArgent(montant){
        this.solde = this.solde - montant;
        return `${montant} € retiré(s) du compte de ${this.nom} ${this.prenom}.\n${this.afficherSolde()}`;
    }

    ajouterDeLArgent(montant){
        this.solde = this.solde + montant;
        return `${montant} € ajouté(s) au compte de ${this.nom} ${this.prenom}.\n${this.afficherSolde()}`;
    }

    virementBancaire(montant, receveur){
        console.log(`${''.padEnd(70, '-')}`);
        console.log(`Virement de ${montant} € à ${receveur.nom} ${receveur.prenom} de la part de ${this.nom} ${this.prenom}`);
        console.log(receveur.ajouterDeLArgent(montant));
        return this.retirerDeLArgent(montant);
    }
}
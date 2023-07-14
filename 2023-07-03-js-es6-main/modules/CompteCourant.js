import Compte from './Compte.js';
import CarteCredit from './CarteCredit.js';

export default class CompteCourant extends Compte{
    constructor(nom, prenom, solde, numeroCarte, codePin){
        super(nom, prenom, solde);
        this.numeroCarte = numeroCarte;
        this.carteCredit = new CarteCredit(this.numeroCarte, codePin);
        /* 
        associer un objet à une classe pour des fonctionnement de la classe s'appelle aggregation 
        */
    }

    /* payer avec la carte */
    payerParCarte(montant, codePin, receveur){
        if(this.carteCredit.verifierPin(codePin, this.numeroCarte)){
            console.log(`${''.padEnd(70, '-')}`);
            console.log(`Paiement par carte pour ${receveur.nom} ${receveur.prenom}`);
            console.log(receveur.ajouterDeLArgent(montant));
            return this.retirerDeLArgent(montant);
        }else{
            console.log(`${''.padEnd(70, '-')}`);
            return `Une tentative de paiement par carte de ${montant} € a échoué`;
        }
    }

}
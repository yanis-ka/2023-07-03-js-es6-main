import Compte from './Compte.js';

export default class CompteInteret extends Compte{
    constructor(nom, prenom, solde, tauxInteret){
        super(nom, prenom, solde);
        this.tauxInteret = tauxInteret;
    }

    calculerInterets(){
        return parseFloat(((this.tauxInteret - 1) * this.solde).toFixed(2), 2);
    }

    crediterInteret(){
        return parseFloat(this.solde = this.solde + this.calculerInterets(), 2);
    }
}
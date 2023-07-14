import loaded, {q, qA, addSpan, toto} from './Utilities.js';
import CompteInteret from './CompteInteret.js';
import CompteCourant from './CompteCourant.js';

loaded(function(){
    const monCompteCourant = new CompteCourant('Duflot', 'Nicolas compte Chèque', 1500, '0123456789', 1234);
    console.log(monCompteCourant);
    console.log(monCompteCourant.carteCredit.numeroCarte);
    
    const compteMagasin = new CompteCourant('Acme Inc.', 'Compte entreprise', 250000, '9876543210', 4321);

    console.log(compteMagasin.solde);
    console.log(monCompteCourant.payerParCarte(20, 1234, compteMagasin));
    console.log(compteMagasin.solde);
    console.log(monCompteCourant.payerParCarte(20, 123, compteMagasin));

    const monCompteEpargne = new CompteInteret('Duflot', 'Nicolas Livret A', 2000, 1.05);
    
    /* 
    créer dans la bonne classe une méthode virementBancaire qui permet de virer un montant d'un compte à un autre (sans oublier de retirer l'argent du compte débiteur)
    */
   
   console.log(compteMagasin.virementBancaire(200, monCompteCourant));
   console.log(monCompteCourant.virementBancaire(500, monCompteEpargne));
   console.log(monCompteCourant.afficherSolde());
});
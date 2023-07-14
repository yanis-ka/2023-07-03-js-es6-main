/* 
c'est ici que l'on va importer les différents fonctions des bibliothèque dont on va avoir besoin sur la page
*/
/* import des fonctions, etc */

import * as other from './Others.js';
import loaded, {q, qA, addSpan, toto} from './Utilities.js';
import Toto from './Company.js';
import Company from './Company.js';
import AnotherCompany from './Another.js';

/* le script a appliquer sur la page */

console.log(other.test());

loaded(function(){
    console.log('la page est chargée !');
    q('#addSpan').addEventListener('click', function(){
        addSpan(this.dataset.target, 'Coucou');
    });

    const myCompany = new Toto('Acme');
    console.log(myCompany);

    const anotherCompany = new Company('Agence tous risques');
    console.log(anotherCompany);
    
    const customCompany = new AnotherCompany('Nike', 'Juste fait le !');
    console.log(customCompany);
    
   


});
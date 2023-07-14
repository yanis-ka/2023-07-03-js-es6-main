/**
 * Attendre que le DOM soit chargé
 * @param {*} callback - fonctionnement a déclencher au chargement de la page
 */
export default function loaded(callback) {
    window.addEventListener('DOMContentLoaded', callback);
}

/**
 * 
 * @param {String} selector - le selecteur CSS de l'élément
 * @returns 
 */
export function q(selector) {
    return document.querySelector(selector);
}
/**
 * 
 * @param {String} selector - le selecteur CSS de la collection
 * @returns 
 */
export function qA(selector) {
    return document.querySelectorAll(selector);
}

function addSpan(cible, texte){
    const testSpan = document.createElement('span');
    testSpan.classList.add('testSpan');
    const content = document.createTextNode(texte);
    testSpan.appendChild(content);
    testSpan.addEventListener('click', function(){
        this.remove();
    });
    q(cible).appendChild(testSpan);
}

function toto(){
    return 'tata';
}

export {addSpan, toto};
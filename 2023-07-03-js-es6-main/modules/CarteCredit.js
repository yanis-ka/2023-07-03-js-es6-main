export default class CarteCredit{
    constructor(numeroCarte, codePin){
        this.numeroCarte = numeroCarte;
        this._codePin = codePin;
    }

    get getCodePin(){
        return this._codePin;
    }

    verifierPin(codePin, numeroCarte){
        if(codePin === this.getCodePin && numeroCarte === this.numeroCarte){
            return true;
        }else{
            return false;
        }
    }
}
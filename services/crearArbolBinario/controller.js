const config = require('../../config');

class NodoService {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class CrearArbolBinarioService {

    constructor() {
        this.root = null;
    }

    insertarNodo(value){
        var newNode = new NodoService(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(current){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }


}

module.exports = CrearArbolBinarioService;
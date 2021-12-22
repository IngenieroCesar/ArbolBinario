
class NodoService {
    constructor(value){
        this.value = value
    }
}

class CrearArbolBinarioService {

    constructor() {
        this.root = null;
    }


    /*
    Evaluamos y establecemos las posiciones de nuestros nodos.
    */
    insertarNodo(arrayTree, value){

        let node = arrayTree, key;
        while (node.value !== value && value != null) {
                key = value < node.value ? 'izquierdo' : 'derecho';
                if (!node[key]) {
                    node[key] = new NodoService(value);
                    break;
                }
                node = node[key];
        }
        return(arrayTree);

    }

    /*
    Generamos nuestro arbol binario
    */
    crearArbol( arrayTree ) {
        return new Promise( ( resolve, reject ) => {
            try {
                let arbolBinario =  arrayTree.reduce((valorAnterior, valorActual) => valorAnterior ? this.insertarNodo(valorAnterior, valorActual) : new NodoService(valorActual), null);
                resolve({ 
                    data: arbolBinario,
                    status: 200,
                    message: "Arbol binario generado con exito."
                });
            } catch (error) {
                reject({
                    error: error.message,
                    status: 500,
                    message: "Problema al generar arbol binario."
                })
            }
        });
        
    }

}

module.exports = CrearArbolBinarioService;
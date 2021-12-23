const store = require('./store');

class NodoService {
    constructor(nodo){
        this.nodo = nodo
    }
}

class CrearArbolBinarioService {

    constructor() {
  
    }

    /*
    Evaluamos y establecemos las posiciones de nuestros nodos.
    */
    insertarNodo(arrayTree, nodo){
        let nodoPrincipal = arrayTree, key;
        console.log(nodoPrincipal);
        while (nodoPrincipal.nodo !== nodo && nodo != null) {
                key = nodo < nodoPrincipal.nodo ? 'izquierdo' : 'derecho';
                if (!nodoPrincipal[key]) {
                    nodoPrincipal[key] = new NodoService(nodo);
                    break;
                }
                nodoPrincipal = nodoPrincipal[key];
        }
        return(arrayTree);

    }

    /*
    Generamos nuestro arbol binario
    */
    crearArbol( arrayTree ) {
        return new Promise( ( resolve, reject ) => {
            try {

                let currentArbolBinario = store.obtenerArbolNBinario;

                currentArbolBinario.length > 0 ? store.actualizarArbolBinario(arrayTree) : store.crearArbolBinario(arrayTree);

                let arbolBinario =  arrayTree.reduce((valorAnterior, valorActual) => valorAnterior ? this.insertarNodo(valorAnterior, valorActual) : new NodoService(valorActual), null);
                resolve({ 
                    data: arbolBinario,
                    status: 200,
                    message: "Arbol binario generado con exito."
                });

            } catch (error) {
                console.log(error);
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
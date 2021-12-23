const store = require('./store');

class NodoService {
    constructor(nodo){
        this.nodo = nodo
    }
}

class BuscarAncestroComunService {

    constructor() {
  
    }

    /*
    Evaluamos y establecemos las posiciones de nuestros nodos.
    */
    insertarNodo(arrayTree, nodo){
        let nodoPrincipal = arrayTree, key;
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

    /*
    Buscamos el ancestro comun mas cercano
    */
    buscarAncestro(arrayTree, nodo1, nodo2 ){
        return new Promise( ( resolve, reject) => {
            this.crearArbol( arrayTree)
                .then( response => {
                    
                    let arbolBinario = response.data;

                    const recorrer = (arbolBinarioIn, nodo1, nodo2) => {

                        if (!arbolBinarioIn) {
                            return null;
                        }


                        if (arbolBinarioIn.nodo === nodo1 || arbolBinarioIn.nodo === nodo2) {
                            return arbolBinarioIn.nodo;
                          }
                        
                          const izquierdo = recorrer(arbolBinarioIn.izquierdo, nodo1, nodo2);
                          const derecho = recorrer(arbolBinarioIn.derecho, nodo1, nodo2);
                        
                          if (izquierdo && derecho) {
                            return arbolBinarioIn.nodo;
                          }
                        
                          return izquierdo ? izquierdo : derecho;

                    }

                    let laRespuesta = recorrer(arbolBinario, nodo1, nodo2);

                    resolve({ 
                        lowestCommonAncestor: laRespuesta,
                        status: 200,
                        message: "Ancestro común más cercano encontrado."
                    });

                })
                .catch( error => {
                    console.log(error);
                    reject({
                        error: error.message,
                        status: 500,
                        message: "Problema al buscar el ancestro común más cercano."
                    })
                });
        });
    };

}

module.exports = BuscarAncestroComunService
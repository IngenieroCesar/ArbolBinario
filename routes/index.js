//crear arbol binario 
const crearArbolBinario = require('../services/crearArbolBinario/network');
//retornar el ancestro común más cercanoio 
const buscarAncestroComun = require('../services/buscarAncestroComun/network');


const routes = function (app){
    //crear arbol binario 
    app.use('/api/creararbolbinario', crearArbolBinario);  
    //retornar el ancestro común más cercanoio 
    app.use('/api/buscarancestrocomun', buscarAncestroComun);
}

module.exports = routes;
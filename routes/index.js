//crear arbol binario 
const crearArbolBinario = require('../services/crearArbolBinario/network');


const routes = function (app){
    //Authentication
    app.use('/api/creararbolbinario', crearArbolBinario);  
}

module.exports = routes;
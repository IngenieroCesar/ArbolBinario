/*
La capa de almacenamiento esta adaptada en caso de existir un servicio de base de datos con redis. 
*/
const Redis = require('ioredis');
const config = require('../../config/index');
let statusRedisConexion = false;
let client;
let arbolBinario = [];

const iniciarConexion = async () => {
    if(config.redis_port.length > 0 && config.redis_url.length > 0){
        try {
            //creamos un cliente
            statusRedisConexion = true;
            client = new Redis({
                port: config.redis_port,
                host: config.redis_url,
                maxRetriesPerRequest : 1 , 
                retryStrategy(times) {
                    const delay = Math.min(times * 50000, 20000);
                    return false;
                  },
            });

            client.on('error', async (err) => {
                statusRedisConexion = false;                
            });

    
        } catch (error) {
            // console.log(error)
        }
    }
}

/*
Query oara agregar arbol
*/
const crearArbolBinario = async ( arrayArbolBinario ) => {
    try {
        iniciarConexion();

        statusRedisConexion == false ?
            arbolBinario = arrayArbolBinario
            :
            await client.set('arbol_binario_2', JSON.stringify(arrayArbolBinario))

    } catch (error) {
        // console.log(error)
    }

}

const obtenerArbolNBinario = async () => {
    try {
        iniciarConexion();

        statusRedisConexion == false ?
            arbolBinario
            :
            JSON.parse(await client.get('arbol_binario_2'));
    } catch (error) {
        // console.log(error)
    } 
}

const actualizarArbolBinario = async ( arrayArbolBinario ) => {
    try {
        iniciarConexion();

        statusRedisConexion == false ?
            arbolBinario = arrayArbolBinario
            :
            await client.set('arbol_binario_2', JSON.stringify(arrayArbolBinario))
    } catch (error) {
        // console.log(error)
    }
}

module.exports = {
    crearArbolBinario,
    obtenerArbolNBinario,
    actualizarArbolBinario
}
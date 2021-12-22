/*
La capa de almacenamiento esta adaptada en caso de existir un servicio de base de datos con redis. 
*/
const redis = require('redis');
const config = require('../../config/index');
let statusRedisConexion = false;
let client;

// const redisClient = redis.createClient(6379,'127.0.0.1');
// redisClient.on('connection', () => { 
//     console.info('Redis connected!');
//   });

if(config.redis_port.length > 0 && config.redis_url.length > 0){
    try {
        //creamos un cliente
        statusRedisConexion = true;
        (async () => {
          client = redis.createClient();
        
          client.on('error', (err) => {
              console.log('Redis Client Error', err);
              statusRedisConexion = false;
            });
        
          await client.connect();

        })();
    } catch (error) {
        console.log("error",error)
    }
}

var arbolBinario = [];

const crearArbolBinario = async ( arrayArbolBinario ) => {
    statusRedisConexion == false ?
        arbolBinario = arrayArbolBinario
        :
        await client.set('arbol_binario', JSON.stringify(arrayArbolBinario))
}

const obtenerArbolNBinario = async () => {
    statusRedisConexion == false ?
        arbolBinario
        :
        JSON.parse(await client.get('arbol_binario'));
                
}

const actualizarArbolBinario = async ( arrayArbolBinario ) => {
    statusRedisConexion == false ?
        arbolBinario = arrayArbolBinario
        :
        await client.set('arbol_binario', JSON.stringify(arrayArbolBinario))
}

module.exports = {
    crearArbolBinario,
    obtenerArbolNBinario,
    actualizarArbolBinario
}
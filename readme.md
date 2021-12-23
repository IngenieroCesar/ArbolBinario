# Título del Proyecto

Arbol Binario

---
## Requerimientos

Para el desarrollo, solo necesitará Node.js y un paquete global de node, npm, instalados en su entorno.

### Node
- #### Instalación de Node en Ubuntu

Puede instalar nodejs y npm fácilmente con apt install, simplemente ejecute los siguientes comandos. 

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Verificacion de instalación

Puede encontrar más información sobre la instalación en el [sitio web oficial de Node.js] (https://nodejs.org/) y el [sitio web oficial de NPM] (https://npmjs.org/). 

Si la instalación fue exitosa, debería poder ejecutar el siguiente comando.

    $ node --version
    v12.22.7

    $ npm --version
    6.14.15


## Clonar el proyecto

    $ git clone https://github.com/IngenieroCesar/ArbolBinario.git
    $ cd <CARPETA_PROYECTO>
    $ npm install

## Configuracion del proyecto

Genere el archivo y establesca variables de entorno ".env", como se especifica en el archivo de ejemplo .env.example.

## Configuracion base de datos redis(opcional)

De ser necesario el proyecto cuenta con la capacidad de trabajar con base de datos, <REDIS_URL> <REDIS_PORT>, lo cual no es necesario para el correcto funcionamiento del proyecto.

## Ejecutar base de datos redis Docker(opcional)

Ejecute el siguiente comando en su consola:

- docker run -d --name redisContainerArbolBinario -p 127.0.0.1:6379:6379 redis

## Documentacion del proyecto.

Dirijase a la siguiente ruta en el navegador, en la cual encontrara la documentacion correspondiente a los servicios expuestos por esta api.

- http://localhost: < PUERTO > /api/swagger/docs/#/

Estableciendo el puerto seleccionado en su archivo .env.

## Ejecutar el proyecto en ambiente de desarrollo

    $ npm run dev

## Ejecutar test de integracion de los servicios

Asegurese de que el proyecto este ejecutandose

    $ npm run dev

Inicie el test de los servicios

    $ npm run test

## Ejecutar el proyecto en ambiente de producción

    $ npm run start

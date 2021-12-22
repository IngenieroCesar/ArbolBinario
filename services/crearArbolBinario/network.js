const express = require('express');
const router = express.Router();
const response = require('../../utils/response');
const validationHandler = require('../../utils/middleware/validationHandler');
const { crearArbolBinarioSchema } = require('../../utils/schemas/arbolBinario');

const CrearArbolBinarioService = require('./controller');
const crearArbolBinarioApi = new CrearArbolBinarioService();

router.post('/', validationHandler(crearArbolBinarioSchema), async (req, res, next) => {     
    const { body } = req;  

    crearArbolBinarioApi.crearArbol(body.arrayTree)
        .then((data) => {
            response.success(req, res, data)
        })
        .catch((error) => {                    
            response.error(req, res, error)
        });

});

module.exports = router;
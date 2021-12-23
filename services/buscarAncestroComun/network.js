const express = require('express');
const router = express.Router();
const response = require('../../utils/response');
const validationHandler = require('../../utils/middleware/validationHandler');
const { buscarAncestroComun } = require('../../utils/schemas/arbolBinario');

const BuscarAncestroComunService = require('./controller');
const buscarAncestroComunApi = new BuscarAncestroComunService();

router.post('/', validationHandler(buscarAncestroComun), async (req, res, next) => {     
    const { body } = req;  

    buscarAncestroComunApi.buscarAncestro(body.arrayTree, body.nodo1, body.nodo2)
        .then((data) => {
            response.success(req, res, data)
        })
        .catch((error) => {                    
            response.error(req, res, error)
        });

});

module.exports = router;
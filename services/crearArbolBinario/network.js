const express = require('express');
const router = express.Router();
const response = require('../../utils/response');

const CrearArbolBinarioService = require('./controller');
const crearArbolBinarioApi = new CrearArbolBinarioService();

router.post('/', async (req, res, next) => {     
    const { body: arrayTree } = req;  

    console.log(arrayTree.reduce((t, v) => console.log(t, v);
    // crearArbolBinarioApi.crearArbol(arrayTree)
    //     .then((data) => {
    //         response.success(req, res, data)
    //     })
    //     .catch((error) => {                    
    //         response.error(req, res, error)
    //     });

});

module.exports = router;
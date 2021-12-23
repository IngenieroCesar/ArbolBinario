const Joi = require('@hapi/joi');

const crearArbolBinarioSchema = {
    arrayTree: Joi.array().min(2).items(Joi.number().integer().strict().allow(null)).required()
};

const buscarAncestroComun = {
    arrayTree: Joi.array().min(2).items(Joi.number().integer().strict().allow(null)).required(),
    nodo1: Joi.number().min(1).integer().strict().required(),
    nodo2: Joi.number().min(1).integer().strict().required(),
}

module.exports = { 
    crearArbolBinarioSchema,
    buscarAncestroComun
};
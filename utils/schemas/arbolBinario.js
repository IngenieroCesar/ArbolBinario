const Joi = require('@hapi/joi');


const crearArbolBinarioSchema = {
    arrayTree: Joi.array().items(Joi.number().integer().strict().allow(null))
};

module.exports = { 
    crearArbolBinarioSchema
};
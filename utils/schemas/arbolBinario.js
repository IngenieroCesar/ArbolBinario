const Joi = require('@hapi/joi');


const crearArbolBinarioSchema = {
    arrayTree: Joi.array().min(2).items(Joi.number().integer().strict().allow(null))
};


module.exports = { 
    crearArbolBinarioSchema
};
const boom = require('@hapi/boom');
const response = require('../response');
const joi = require('@hapi/joi');

function validate(data, schema) {
    const { error } = joi.validate(data, schema);
    return error;
}

function validationHandler(schema, check = "body") {
    return function (req, res, next) {
        const error = validate(req[check], schema);        
        error ? response.error(req, res, {
            data: error.details,
            status: 400,
            message: "Problema en la estructura de datos enviados para esta petición."
        }) : next(); 
    }
}

module.exports = validationHandler;

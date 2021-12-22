exports.success = function (req, res, data) {
    //Envio de evento a redis    
    res.status(data.status).send(data);
}

exports.error = function (req, res, error) {
    //Envio de evento a redis    
    res.status(error.status).send(error);
}
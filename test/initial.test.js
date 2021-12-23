let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;

const config = require('../config/index');
const url= `http://localhost:${config.port}`;

 describe('Testing crear arbol binario', () => {
     it('Debe generar un arbol binario', (done) => {
        chai.request(url)
            .post('/api/creararbolbinario')
            .send({"arrayTree": [67, 39, 76, 28, 44, 74, 85, 29, 83, 87]})
            .end( (err,res) => {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
                });
     });

 });

 describe('Testing busqueda de ancestro común más cercano', () => {
    it('Debe encontrar el ancestro común más cercano', (done) => {
       chai.request(url)
           .post('/api/buscarancestrocomun')
           .send({
                "arrayTree": [67, 39, 76, 28, 44, 74, 85, 29, 83, 87],
                "nodo1": 83,
                "nodo2": 87
            })
           .end( (err,res) => {
               console.log(res.body)
               expect(res).to.have.status(200);
               done();
               });
    });

});
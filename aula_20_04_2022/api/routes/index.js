const bodyParser = require('body-parser');

const pessoas = require('./pessoasRoutes');
const niveis = require ('./niveisRoute');
const turmas = require ('./turmasRoute');

module.exports = app => {
    app.use(bodyParser.json(), pessoas, niveis, turmas);
    app.get('/', (req, res) => res
    .send({ mensagem: 'Olá! Está é o endereço principal da minha primeira API *-*!' 
}));

}
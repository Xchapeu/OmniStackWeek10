const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://xchapeu:rodrigo9613@cluster0-wajfd.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());//Para o express reconhecer o json nas rotas
app.use(routes);

//Metodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros

//Query params: request.query(filtros, ordenação, paginação, ...)
//Route params: request.params(Identificar um recurso na alteração ou remoção)
//body: request.body(dados para criação ou alteração de registro)

//localhost:3333
server.listen(3333);


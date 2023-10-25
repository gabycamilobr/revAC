//requisições
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

//configuração do express (server para pagina e postman)
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

//configuração do servidor mongodb
//conecte o mongodb
mongoose.connect('mongodb://127.0.0.1:27017/revacmongo',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMs: 2000
})
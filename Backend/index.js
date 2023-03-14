const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');


// conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://app-restapi:BlqCJBnVcXPq9tVbJaqKPO7E4alwVdvuwD79NvMrSGZjJA81CTKIhlC87eBKIzksHzPj4YxIf7GkACDbyD3BXg==@app-restapi.mongo.cosmos.azure.com:10255/rest-api?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@app-restapi@'),{
    useNewUrlParser: true,
}
//crear el servidor
const app = express();

// habilitar bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas de la app
app.use('/', routes());




//puerto
app.listen(5000);
const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const db = require('./models/index');
const CityRepository = require('./Repository/City-repository')
const { CityService } = require('./services/index')
// const db = require('./models/index');

const {PORT}  =require('./config/serverConfig');
const { cityRepository } = require('./Repository');
const apiRouter = require('./routes/index');
const cityController = require('./controllers/city-controller')
const { AirplaneRepository } = require('./Repository/index')

const setupAndStartServer = async() => {
    const app = express();
    // const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRouter);

    app.listen(PORT, async() => { 
       
        console.log(`server started at port ${PORT}`);
    })
}

setupAndStartServer();
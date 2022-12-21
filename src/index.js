const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index');
const CityRepository = require('./Repository/City-repository')
const CityService = require('./services/city-service')

const {PORT}  =require('./config/serverConfig');
const { cityRepository } = require('./Repository');

const setupAndStartServer = async() => {
    const app = express();
    // const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        // console.log(cityRepository);
        const repo = new CityRepository;
        // const 
        // console.log(CityService);
        // const obj = new CityService();
        // obj.cityRepository.createCity({name : "vrindavan"})
        // repo.createCity({name : 'Bangalore'});
        // repo.updateCity(1, {name : 'Mathura'});
        console.log(`server started at port ${PORT}`)
        // console.log(db.City);
    })
}

setupAndStartServer();
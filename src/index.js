const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index');
const CityRepository = require('./Repository/City-repository')

const {PORT}  =require('./config/serverConfig')

const setupAndStartServer = async() => {
    const app = express();
    // const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        const repo = new CityRepository;
        // repo.createCity({name : 'Bangalore'});
        repo.updateCity(1, {name : 'Mathura'});
        console.log(`server started at port ${PORT}`)
        // console.log(db.City);
    })
}

setupAndStartServer();
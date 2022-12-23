const { CityService }  = require('../services/index');

const cityService = new CityService();

const create = async(req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "successfully created a city",
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unable to create a city",
            err : error
        })
    }
}

//DELETE -> /city:id
const destroy = async(req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);

        return res.status(200).json({
            data : response,
            success : true,
            message : "successfully deleted a city",
            err : {}
        });
    }catch(error) {
        console.log(req.params.id);
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unable to delete a city",
            err : error
        
        });
    }
}



const get = async(req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        console.log(response);
        return res.status(200).json({
            data : response.dataValues,
            success : true,
            message : "successfully fectched a city",
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unable to fetch a city",
            err : error
        });
        
    }

}

//PATCH -> /city/:id -> req.body
const update = async(req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : "successfully updated a city",
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unable to update a city",
            err : error
        });        
    }
}

const getAll = async(req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
         res.status(500).json({
            response : cities,
            success : true,
            message : "successfully fetched  city/cities",
            err : {}
        })
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unable to fetch all cities",
            err : error
        });   
    }
}


module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}

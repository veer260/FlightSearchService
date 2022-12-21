const { cityService, cityService } = require('../services/index');

const cityService = new cityService();

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
        const response = await cityService.deleteCity(req.param.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "successfully deleted a city",
            err : {}
        });
    }catch(error) {
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
        const response = await cityService.getCity(req.param.id);
        return res.status(200).json({
            data : response,
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
        const response = await cityService.updateCity(req.param.id, req.body);
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

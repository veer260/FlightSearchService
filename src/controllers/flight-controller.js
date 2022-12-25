const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            response : flight,
            success : true,
            error : {},
            message : 'Successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            err : error, 
            message : 'Not able to create a flight'
        })        
    }
}

const getAll = async(req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(201).json( {
            response : response,
            success : true,
            error : {},
            message : 'Successfully managed to get the data about the desired flight/s'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            err : error, 
            message : 'Not able to create a flight'
        })  
    }
}

module.exports = {
    create,
    getAll
}
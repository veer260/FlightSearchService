const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            departureTime : req.body.departureTime,
            arrivalTime : req.body.arrivalTime,
            price : req.body.price,
        }
        const flight = await flightService.createFlight(flightRequestData);
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
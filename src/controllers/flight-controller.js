const { FlightService } = require('../services/index');
const { ClientErrorCodes, SuccessCodes } = require('../utils/error-codes')

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
        return res.status(SuccessCodes.CREATED).json({
            response : flight,
            success : true,
            error : {},
            message : 'Successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            err : error, 
            message : 'Not able to create a flight'
        })        
    }
}

const get = async(req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(201).json( {
            response : response,
            success : true,
            error : {},
            message : 'Successfully managed to get the data about the desired flight'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            err : error, 
            message : 'Not able to fetch the details about the flight'
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

const update = async(req, res) => {
    try {
        const response = await flightService.updateTheFlight(req.params.id, req.body);
        return res.status(201).json( {
            response : response,
            success : true,
            error : {},
            message : 'Successfully managed to updata  the desired flight/s'
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            err : error, 
            message : 'Not able to update a flight'
        })  
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}
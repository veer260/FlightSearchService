const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        // console.log(flightService.createFlight);
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            response : flight,
            success : true,
            error : {},
            message : 'Successfully created a flight'
        })
    } catch (error) {
        // console.log(flightService.createFlight());
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
    create
}
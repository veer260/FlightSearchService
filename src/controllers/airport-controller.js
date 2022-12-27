const { AirportService } = require('../services/index');
const { ClientErrorCodes, SuccessCodes } = require('../utils/error-codes')

const airportService = new AirportService();

const create = async(req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            succeess : true,
            data : response,
            message : "Created an airport",
            err : {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            err : error,
            message : "Couldn't create an airport",
            data: {}
        })   
    }
}

module.exports = {
    create
}
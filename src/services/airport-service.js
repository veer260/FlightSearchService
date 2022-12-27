const CrudService = require("./crud-service");
// const {} = require('../Repository/index');
const AirportRepository = require("../Repository/AirportRepository");

class AirportService extends CrudService {
    constructor() {
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportService;
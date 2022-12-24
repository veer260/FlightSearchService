const { flightRepository, AirplaneRepository  } = require('../Repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor() {
        this.flightRepository = new flightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error : 'Arrival time cannot be less than departure'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            // console.log(airplane);
            const flight = await this.flightRepository.createFlight({...data, totalSeats : airplane.capacity});
            return flight;
        } catch (error) {
            // const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            // console.log(airplane);
            console.log('Something went wrong in the Service layer!');
            throw { error};
        }
    }
}

module.exports = FlightService;


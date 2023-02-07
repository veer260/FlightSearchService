const { Flights } = require('../models/index');
const  { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) {
        const filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        const arr = [];

        if(data.maxPrice) {
            arr.push({price : {[Op.lte] : data.maxPrice}});
        }

        if(data.minPrice) {
            arr.push({price : {[Op.gte] : data.minPrice}});
        }
        Object.assign(filter, {[Op.and] : arr});
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = Flights.create(data);
            return flight;
        }catch(error) {
            console.log('Something went wrong in the repository layer!');
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log('Something went wrong in the repository layer!');
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = await this.#createFilter(filter);
            console.log(filterObject);
            const flights = await Flights.findAll({where : filterObject});
            return flights;
        } catch (error) {
            console.log('Something went wrong in the repository layer!');
            throw {error};
        }
    }

    async updateFlight(flightId, data) {
        try {
            const updatedFlight = await Flights.update(data, {
                where: {
                    id : flightId
                }
            })
            return updatedFlight;
        } catch (error) {
            console.log('Something went wrong in the repository layer!');
            throw {error};
        }
    }
}

module.exports = FlightRepository;
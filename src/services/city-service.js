const {cityRepository} = require('../Repository/index')
class CityService {
    constructor() {
        this.cityRepository = new cityRepository;
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;

        }catch(error) {
            console.log("something's wrong at the service layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await this.cityRepository.deleteCity(cityId);

        }catch (error) {
            console.log("something's wrong at the service layer");
            throw {error};

        }
    }

    async updateCity(cityId, data) {
        try {
            return await this.cityRepository.updateCity(cityId, data);

        }catch(error) {
            console.log("something's wrong at the service layer");
            throw {error};

        }

    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            // console.log(city.dataValues);
            return city;

        }catch(error) {
            console.log("something's wrong at the service layer");
            throw {error};
        }
    }

    
    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities(filter);
            return cities;
        }catch(error) {
            console.log("something's wrong at the service layer");
            throw {error};
        }
    }
    
}

module.exports = CityService;
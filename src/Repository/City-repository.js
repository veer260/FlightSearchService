const {City} = require('../models/index');

class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;

        }catch(error) {
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            });
        }catch (error) {
            throw {error}
        }
    }

    async updateCity(cityId, {name}) {
        try {
            return await City.update({name}, {
                where : {
                    id : cityId
                }
            } )

        }catch(error) {
            console.log('Something went wrong in the database server');
            throw error;

        }
    }

    async getCity(cityId) {
        try {
            return await City.findByPk(cityId);

        }catch(error) {
            console.log('Something went wrong in the database server');
            throw error;
        }
    }
}

module.exports = CityRepository;
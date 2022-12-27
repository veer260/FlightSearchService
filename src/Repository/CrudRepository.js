const { where } = require("sequelize");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in the repo layer!");
            throw {error};
        }
    }

    async destroy(dataId) {
        try {
            const result = await this.model.destroy({
                where : {
                    id : dataId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in the repo layer!");
            throw {error};
        }
    }

    async get(dataId) {
        try {
            const result = await this.model.findByPk(dataId);
            return result;
        } catch (error) {
            console.log("Something went wrong in the repo layer!");
            throw {error};
        }
    }
    
    async getAll() {
        try {
            const results = await this.model.findAll();
            return results;
        } catch (error) {
            console.log("Something went wrong in the repo layer!");
            throw {error};
        }
    }

    async update(data, dataId) {
        try {
            const result = await this.model.update(data, 
                {
                    where : {
                        id : dataId
                    }
                });
            return result;
        } catch (error) {
            console.log("Something went wrong in the repo layer!");
            throw {error};
        }
    }
}

module.exports = CrudRepository;
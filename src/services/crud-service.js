class CrudService {
    constructor(repository) {
        this.repository = repository
    }

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer ");
            throw {error};
        }
    }

    async destroy(dataId) {
        try {
            const response = await this.repository.destroy(dataId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer ");
            throw {error};
        }
    }

    async get(dataId) {
        try {
            const response = await this.repository.get(dataId);
            response;
        } catch (error) {
            console.log("Something went wrong in the repository layer ");
            throw {error};
        }
    }

    async getAll() {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer ");
            throw {error};
        }
    }

    async update(data, dataId) {
        try {
            const response = await this.repository.update(data, dataId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer ");
            throw {error};
        }
    }
}

module.exports = CrudService;
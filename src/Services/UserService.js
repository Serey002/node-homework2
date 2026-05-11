import  UserRepository from "../Repository/UserRepository.js";

class UserService {
    static async getUsers() {
        return await UserRepository.getAllUsers();
    }

    static async getUser(id) {
        return await UserRepository.getUserById(id);
    }

    static async createUser(data) {
        const { name, email } = data;
        if (!name || !email) {
            throw new Error("Name and email are required");
        }
        return await UserRepository.createUser(name, email);
    }

    static async updateUser(id, data) {
        const { name, email } = data;
        return await UserRepository.updateUser(id, name, email);
    }

    static async deleteUser(id){
        return await UserRepository.deleteUser(id);
    }
}

export default UserService;

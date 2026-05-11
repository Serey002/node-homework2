import { Database } from "../config/database.js";

export class UserRepository {
    static async getAllUsers() {
        const [rows] = await Database.pool.promise().query("SELECT * FROM users");
        return rows;
    }


    static async getUserById(id) {
        const [rows] = await Database.pool.promise().query("SELECT * FROM users WHERE id = ?", [id]);
        return rows[0];
    }

    static async createUser(name, email) {
        const [result] = await Database.pool.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
        return result.insertId, name, email;
    }

    static async updateUser(id, name,  email) {
        await Database.pool.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id]);
        return id, name, email;

    }

    static async deleteUser(id) {
        await Database.pool.query("DELETE FROM users WHERE id = ?", [id]);
        return id;
    }
}



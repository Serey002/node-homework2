import mysql from "mysql12";
import dotenv from "dotenv";

dotenv.config();

export class Database {
    static pool =mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    })
}
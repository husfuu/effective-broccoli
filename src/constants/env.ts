import dotenv from "dotenv"
import { Options } from "sequelize";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT ?? 3000
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_DIALECT = process.env.DB_DIALECT as Options["dialect"];

export default {
    NODE_ENV,
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_DIALECT,
}
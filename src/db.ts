import { Sequelize } from "sequelize";
import {
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_HOST,
    DATABASE_PORT
} from "./config";
export const sequelize = new Sequelize(
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASSWORD,
    {
        dialect: "mysql",
        host: DATABASE_HOST,
        port: DATABASE_PORT,
    }
);


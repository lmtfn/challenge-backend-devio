import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize({ 
    dialect: 'mysql',
    host: process.env.DB_HOST,   
    username: process.env.DB_USER,   
    password: process.env.DB_PASS,   
    database: process.env.DB_NAME,   
    port: Number(process.env.DB_PORT),  
    define: {     
        timestamps: true,   
    },
})

export default db;
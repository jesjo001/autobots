import { Sequelize } from 'sequelize';

export const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "tweetai",
    dialect: "mysql",
  };

// Initialize Sequelize with database credentials
export const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
});
  
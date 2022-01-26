const Sequelize = require("sequelize");

const sequelize = new Sequelize("pruebaKubo", "root", "", {
    dialect: "mysql", 
    host: "localhost",
} );

module.exports = sequelize;


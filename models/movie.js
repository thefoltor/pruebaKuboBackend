const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const movie = sequelize.define("movie", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    duration: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categories: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    youtube: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cover: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rate:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = movie;

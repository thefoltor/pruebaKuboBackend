const Sequelize = require("sequelize");

const sequelize = new Sequelize("dcnoudk8vmujtp", 
"kxnkjxwxdhwnfe", 
"03efbb0af42a18611736d0c38467d2ae54dc4911233c0249bda8ea1b096c6a64", {
    dialect: "postgres", 
    protocol: "postgres",
    logging:true,
    host: "ec2-3-224-251-47.compute-1.amazonaws.com",
    dialectOptions: {
        ssl:{
            rejectUnauthorized: false
        }
      }
} );

module.exports = sequelize;


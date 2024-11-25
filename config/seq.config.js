const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "administrator_5starxxxcm",
  "administrator_5starxxxcm",
  "5GxzxY9!rV14",
  {
    dialect: "mysql",
    host: "103.120.176.66",
    logging: false,
  }
);
module.exports = sequelize;

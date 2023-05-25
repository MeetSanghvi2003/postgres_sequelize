const Sequelize = require("sequelize");
const sequelize = new Sequelize("pern_todo", "postgres", "meet1234", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});

module.exports = sequelize;

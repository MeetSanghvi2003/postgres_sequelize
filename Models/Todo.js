const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const todos = sequelize.define(
  "todos",
  {
    todo_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = todos;

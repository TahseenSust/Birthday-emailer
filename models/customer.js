const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Customer = sequelize.define("Customer", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Customer;

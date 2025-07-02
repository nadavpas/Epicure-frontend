import sequelize from "../db.js";
import { DataTypes } from "sequelize";


const Chefs = sequelize.define("Chef", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  // add a one-to-many Restaurants
});

export default Chefs;

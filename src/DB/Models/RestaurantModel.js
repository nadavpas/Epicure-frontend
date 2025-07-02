import sequelize from "../db.js";
import { DataTypes } from "sequelize";

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

const Restaurants = sequelize.define("Restaurant", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
  }, 
  // belongs to chef
  // one-to-many dishes
});
export default Restaurants;

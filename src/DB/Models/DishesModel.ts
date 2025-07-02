import sequelize from "../db.js";
import { DataTypes, Model } from "sequelize";
import type { Optional } from "sequelize";

interface DishAttributes {
  id: string;
  name: string;
  ingredients: string;
  attribute: string;
  price: number;
  image: string;
  RestId?: string; // Foreign key to restaurant
}

type DishCreationAttributes = Optional<DishAttributes, "id">;

class Dish extends Model<DishAttributes, DishCreationAttributes> implements DishAttributes {
  public id!: string;
  public name!: string;
  public ingredients!: string;
  public attribute!: string;
  public price!: number;
  public image!: string;
  public RestId?: string;
}

Dish.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: DataTypes.STRING,
    },
    attribute: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    RestId: {
      type: DataTypes.UUID,
    },
  },
  {
    sequelize,
    modelName: "Dish",
  }
);

export default Dish;

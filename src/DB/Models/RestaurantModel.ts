import sequelize from "../db";
import { DataTypes, Model } from "sequelize";
import type { Optional } from "sequelize";

interface RestaurantAttributes {
  id: string;
  name: string;
  image: string;
  rating: number;
  ChefId?: string; // Foreign key to chef
}

type RestaurantCreationAttributes = Optional<RestaurantAttributes, "id">;

class Restaurant extends Model<RestaurantAttributes, RestaurantCreationAttributes> implements RestaurantAttributes {
  public id!: string;
  public name!: string;
  public image!: string;
  public rating!: number;
  public ChefId?: string;
}

Restaurant.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    ChefId: {
      type: DataTypes.UUID,
    },
  },
  {
    sequelize,
    modelName: "Restaurant",
  }
);

export default Restaurant;

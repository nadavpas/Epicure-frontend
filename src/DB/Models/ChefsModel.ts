import sequelize from "../db.js";
import { DataTypes, Model} from "sequelize";
import type { Optional } from "sequelize";

interface ChefAttributes {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  description: string;
}

type ChefCreationAttributes = Optional<ChefAttributes, "id">;

class Chef extends Model<ChefAttributes, ChefCreationAttributes> implements ChefAttributes {
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public image!: string;
  public description!: string;
}

Chef.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
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
  },
  {
    sequelize,
    modelName: "Chef",
  }
);

export default Chef;

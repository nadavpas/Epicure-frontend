import sequelize from "../db";
import { DataTypes, Model} from "sequelize";
import type { CreationOptional, Optional } from "sequelize";

interface ChefAttributes {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  description: string;
}

interface ChefCreationAttributes extends Optional<ChefAttributes, "id">{}

class Chef extends Model<ChefAttributes, ChefCreationAttributes> implements ChefAttributes {
  declare id: CreationOptional<string>;
  declare firstName: string;
  declare lastName: string;
  declare image: string;
  declare description: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
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

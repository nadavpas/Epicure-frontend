import sequelize from '../db.js'
import { DataTypes } from "sequelize";

const Dishes = sequelize.define('Dish',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },name: {
        type: DataTypes.STRING
    }, ingredients: {
        type: DataTypes.STRING
    }, attribute: {
        type: DataTypes.STRING
    }, price:{
        type: DataTypes.INTEGER
    },image:{
        type: DataTypes.STRING
    }
    // belongs to restaurant
})

export default Dishes
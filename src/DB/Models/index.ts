import Restaurant from "./RestaurantModel.ts";
import Chef from "./ChefsModel.ts";
import Dish from './DishesModel.ts'

Chef.hasMany(Restaurant, {foreignKey: 'ChefId', as: 'restaurants'});
Restaurant.belongsTo(Chef, {foreignKey: 'ChefId', as: 'chef'});

Restaurant.hasMany(Dish, {foreignKey: 'RestId', as: 'dishes'});
Dish.belongsTo(Restaurant, {foreignKey: 'RestId', as: 'restaurant'});

export {Restaurant,Chef,Dish}
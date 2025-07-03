import Restaurant from "./RestaurantModel";
import Chef from "./ChefsModel";
import Dish from './DishesModel'

Chef.hasMany(Restaurant, {foreignKey: 'ChefId', as: 'restaurants'});
Restaurant.belongsTo(Chef, {foreignKey: 'ChefId', as: 'chef'});

Restaurant.hasMany(Dish, {foreignKey: 'RestId', as: 'dishes'});
Dish.belongsTo(Restaurant, {foreignKey: 'RestId', as: 'restaurant'});

export {Restaurant,Chef,Dish}
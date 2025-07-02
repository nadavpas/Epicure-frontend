import Restaurants from "./RestaurantModel.js";
import Chefs from "./ChefsModel.js";
import Dishes from './DishesModel.js'

Chefs.hasMany(Restaurants, {foreignKey: 'ChefId', as: 'restaurants'});
Restaurants.belongsTo(Chefs, {foreignKey: 'ChefId', as: 'chef'});

Restaurants.hasMany(Dishes, {foreignKey: 'RestId', as: 'dishes'});
Dishes.belongsTo(Restaurants, {foreignKey: 'RestId', as: 'restaurant'});

export {Restaurants,Chefs,Dishes}
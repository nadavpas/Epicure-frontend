import sequelize from "./db";
import {Restaurant, Chef, Dish} from './Models/index'

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Create tables (if they don't exist)
    await sequelize.sync({ force: true }); 
    // use { force: true } if you want to drop and recreate tables (be careful, it will delete data)

    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();

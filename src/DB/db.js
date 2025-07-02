import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'epicure',
    'nadavpassal',
    '',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);
export default sequelize
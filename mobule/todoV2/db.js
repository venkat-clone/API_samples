// db.ts
import { Sequelize } from 'sequelize';
import { Todo } from './todo';

const sequelizeSQL = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
});

const sequelizeMongo = new Sequelize('mongodb://localhost/your_database');

Todo.initialize(sequelizeSQL);
Todo.initialize(sequelizeMongo);

export { sequelizeSQL, sequelizeMongo };

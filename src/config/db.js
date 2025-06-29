import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export default new Sequelize(
  'pyramidon_db',
  'postgres',
  'unochapeco',
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  },
);

// export default new Sequelize(
//   process.env.POSTGRES_DB,
//   process.env.POSTGRES_USERNAME,
//   process.env.POSTGRES_PASSWORD,
//   {
//     host: process.env.POSTGRES_HOST,
//     dialect: 'postgres',
//     port: process.env.POSTGRES_PORT,
//   },
// );
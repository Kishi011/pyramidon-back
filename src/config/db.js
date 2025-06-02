import { Sequelize } from 'sequelize';

export default new Sequelize();
// export default new Sequelize(
//   process.env.POSTGRES_DB,
//   process.env.POSTGRES_USERNAME,
//   process.env.POSTGRES_PASSWORD,
//   {
//     host: process.env.POSTGRES_HOST,
//     dialect: 'postgres',
//     schema: process.env.POSTGRES_SCHEMA,
//     port: process.env.POSTGRES_PORT,
//   },
// );
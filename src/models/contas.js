import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Contas = sequelize.define(
  'contas',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },    
    senha: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    chaveCrypto: {
      field: 'chave_crypto',
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Contas;

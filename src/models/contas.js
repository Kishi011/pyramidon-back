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
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },    
    senha: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    chaveCrypto: {
      field: 'chave_crypto',
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Contas;

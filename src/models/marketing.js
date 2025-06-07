import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Marketing = sequelize.define(
  'marketing',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    nome_rede_social: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    nome_perfil: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    arroba_perfil: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    link_acesso: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    responsavel: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'funcionarios',
        key: 'id',
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Marketing;
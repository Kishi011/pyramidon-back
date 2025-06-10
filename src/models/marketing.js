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
    nomeRedeSocial: {
      type: DataTypes.STRING(20),
      field: 'nome_rede_social',
      allowNull: false,
    },
    nomePerfil: {
      type: DataTypes.STRING(30),
      field: 'nome_perfil',
      allowNull: false,
    },
    arrobaPerfil: {
      type: DataTypes.STRING(30),
      field: 'arroba_perfil',
      allowNull: false,
      unique: true,
    },
    linkAcesso: {
      type: DataTypes.STRING(255),
      field: 'link_acesso',
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
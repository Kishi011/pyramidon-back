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
      allowNull: false,
      field: 'nome_rede_social',
    },
    nomePerfil: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'nome_perfil',
    },
    arrobaPerfil: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      field: 'arroba_perfil',
    },
    linkAcesso: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'link_acesso',
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
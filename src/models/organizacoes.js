import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Organizacoes = sequelize.define(
  'organizacoes',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    idConta: {
      field: 'id_conta',
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'contas',
        key: 'id',
      },
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    emFuncionamento: {
      field: 'em_funcionamento',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    quantidadeFuncionarios: {
      field: 'quantidade_funcionarios',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Organizacoes;

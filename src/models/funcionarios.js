import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Funcionarios = sequelize.define(
  'funcionarios',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    codFuncionario: {
      type: DataTypes.BIGINT,
      field: 'cod_funcionario',
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    salario: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true,
    },
    idOrganizacao: {
      field: 'id_organizacao',
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'organizacoes',
        key: 'id',
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Funcionarios;
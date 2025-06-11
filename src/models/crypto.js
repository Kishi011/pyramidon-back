import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Crypto = sequelize.define(
  'crypto',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    tagMercado: {
      field: 'tag_mercado',
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    quantidadeDisponivel: {
      field: 'quantidade_disponivel',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    quantidadePossuida: {
      field: 'quantidade_possuida',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    valor: {
      type: DataTypes.DECIMAL(10, 5),
      allowNull: true,
    },
    aberta: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
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

export default Crypto;

import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Model = sequelize.define(
  'model',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    campo: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    outroCampo: {
      type: DataTypes.DOUBLE,
      field: 'outro_campo',
      primaryKey: false,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Model;
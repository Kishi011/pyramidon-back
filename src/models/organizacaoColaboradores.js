import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const OrganizacaoColaboradores = sequelize.define(
    'organizacao_colaboradores',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
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
        idColaborador: {
            field: 'id_colaborador',
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'colaboradores',
                key: 'id',
            },
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default OrganizacaoColaboradores;
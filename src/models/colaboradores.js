import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Colaboradores = sequelize.define(
    'colaboradores',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        cpf: {
            type: DataTypes.STRING(11),
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        telefone: {
            type: DataTypes.STRING(11),
            allowNull: true,
        },
        cep: {
            type: DataTypes.STRING(8),
            allowNull: true,
        },
        banco: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        numeroCartao: {
            field: 'numero_cartao',
            type: DataTypes.STRING(16),
            allowNull: true,
        },
        senhaCartao: {
            field: 'senha_cartao',
            type: DataTypes.INTEGER(),
            allowNull: true,
        },
        senhaSeguranca: {
            field: 'senha_seguranca',
            type: DataTypes.INTEGER(),
            allowNull: true,
        },
        dataVencimentoCartao: {
            field: 'data_vencimento_cartao',
            type: DataTypes.DATE,
            allowNull: true,
        },
        
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default Colaboradores;
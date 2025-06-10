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
        bancos: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        numero_cartao: {
            type: DataTypes.STRING(16),
            allowNull: true,
        },
        senha_cartao: {
            type: DataTypes.INTEGER(),
            allowNull: true,
        },
        cvv: {
            type: DataTypes.INTEGER(),
            allowNull: true,
        },
        vencimento_cartao: {
            type: DataTypes.INTEGER(),
            allowNull: true,
        },
        
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default Colaboradores;
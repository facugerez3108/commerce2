import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Token } from "./Token.js";
import { Product } from "./Product.js";

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('ADMIN', 'USER', 'EMPLOYEE'),
        defaultValue: 'USER',
    },
    isEmailVerify: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },  
})

User.hasMany(Token, {foreignKey: 'userId', sourceKey: 'id'});
Token.belongsTo(User, {foreignKey: 'userId', sourceKey: 'id'});

Product.hasMany(User, {foreignKey: 'productId', sourceKey: 'id'});
User.belongsTo(Product, {foreignKey: 'productId', sourceKey: 'id'});
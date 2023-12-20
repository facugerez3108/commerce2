import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Token = sequelize.define('Token', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('ACCESS', 'REFRESH', 'RESET_PASSWORD', 'VERIFY_EMAIL'),
        defaultValue: 'ACCESS',
        
    },
    expiresIn: {
        type: DataTypes.DATE,
        allowNull: false
    },
    blacklisted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})


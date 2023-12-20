import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Product } from "./Product.js";


export const Categories = sequelize.define('Categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
})


Categories.hasMany(Product, {foreignKey: 'categoryId', sourceKey: 'id'});
Product.belongsTo(Categories, {foreignKey: 'categoryId', sourceKey: 'id'});
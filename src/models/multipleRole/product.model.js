const {DataTypes, Model} = require("sequelize")
const  sequelize = require("../../config/db")


class Product extends Model {} 

Product.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          name: {
            type: DataTypes.STRING
          },
          details: {
            type: DataTypes.STRING
          },
          digital: {
            type: DataTypes.BOOLEAN
          },
    },
    {
        sequelize
    }
)

module.exports = {Product}
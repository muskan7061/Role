const {DataTypes, Model} = require("sequelize")
const  sequelize = require("../../config/db")


class Categories extends Model {} 

Categories.init(
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
    },
    {
        sequelize
    }
)

module.exports = {Categories}
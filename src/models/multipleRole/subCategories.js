const {DataTypes, Model} = require("sequelize")
const  sequelize = require("../../config/db")


class subCategories extends Model {} 

subCategories.init(
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
          description: {
            type: DataTypes.STRING
          },
    },
    {
        sequelize
    }
)

module.exports = {subCategories}
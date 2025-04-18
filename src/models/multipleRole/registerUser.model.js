const { DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")



class registerUser extends Model {}

registerUser.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          role: {
            type: DataTypes.ENUM("user", "admin", "seller")
          },
    }, 
    {
        sequelize,
        timestamps: false
    }

)


module.exports = {registerUser}
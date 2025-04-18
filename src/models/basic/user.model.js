const { DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")



class User extends Model {}

User.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          username: {
            type: DataTypes.STRING
          },
          email: {
            type: DataTypes.STRING
          },
          password: {
            type: DataTypes.STRING
          },
          role: {
            type: DataTypes.ENUM("student", "college")
          },
    }, 
    {
        sequelize,
        timestamps: false
    }

)


module.exports = {User}
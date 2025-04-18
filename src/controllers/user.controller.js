const { User } = require("../models/user.model");


const user = async (req, res) =>{
    try {
        const {username, email, password, role} = req.body
        const userCreate = await User.create({username, email, password, role})
        return res.status(201).json({
            message: "User created successfully",
            data: userCreate
        })
    } catch (error) {
        console.log("Error in user Api:", error);
        return res.status(500).json({
            message: "Internal server Error",
            error: error.message
        })
    }
}

const loginUser = async (req, res) =>{
    try {
        const { email, password} = req.body
        const userLogin = await User.create({email, password})
        return res.status(201).json({
            message: "User login successfully",
            data: userLogin
        })
    } catch (error) {
        console.log("Error in loginUser Api:", error);
        return res.status(500).json({
            message: "Internal server Error",
            error: error.message
        })
    }
}

module.exports = {user, loginUser}
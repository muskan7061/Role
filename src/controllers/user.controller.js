const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if ([username, email, password, role].some((data) => data.trim() === "")) {
      return res.status(409).json({
        status: 409,
        messgae: "All fileds are required",
      });
    }
    const existUser = await User.findOne({ where: { email } });
    if (existUser) {
      return res.status(409).json({
        status: 409,
        message: "User already exists with this email or username",
      });
    }
    const hassPassword = await bcrypt.hash(password, 10);
    const userCreate = await User.create({
      username,
      email,
      password: hassPassword,
      role,
    });
    return res.status(201).json({
      message: "User created successfully",
      data: userCreate,
    });
  } catch (error) {
    console.log("Error in user Api:", error);
    return res.status(500).json({
      message: "Internal server Error",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("===", email, password);

    if (!email && !password) {
      return res.status(409).json({
        status: 409,
        messgae: "Email and Password are required",
      });
    }
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) {
      return res.status(409).json({
        status: 409,
        messgae: "User does not exist with this Email",
      });
    }
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      return res.status(401).json({
        status: 401,
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign(
      {
        userId: findUser.id,
        name: findUser.name,
        username: findUser.username,
        email: findUser.email,
        role: findUser.role,
      },
      process.env.JWT_SECRET_TOKEN,
      {
        expiresIn: process.env.JWT_EXPIRY_TOKEN,
      }
    );
    res.cookie("token", token, {
        httpOnly: true,
        secure: false
    })
    return res.status(201).json({
      message: "User login successfully",
      data: findUser,
      token: token,
    }); 
  } catch (error) {
    console.log("Error in loginUser Api:", error);
    return res.status(500).json({
      message: "Internal server Error",
      error: error.message,
    });
  }
};

module.exports = { user, loginUser };
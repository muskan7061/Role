const userController = require("../controllers/user.controller")
const express = require("express")
const router = express.Router()


router.post("/user", userController.user)


module.exports = router
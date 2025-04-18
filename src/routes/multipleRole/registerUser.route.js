const {register, loginUser} = require("../../controllers/multipleRole/registerUser.controller")
const {createProduct} = require("../../controllers/multipleRole/sellerCreateProduct.controller")
const {createCategories} = require("../../controllers/multipleRole/categories.controller")
const express = require("express")
const router = express.Router()


router.post("/register-user", register)
router.post("/login-user", loginUser)



router.post("/product-create", createProduct)
router.post("/categpories-create",createCategories )

module.exports = router


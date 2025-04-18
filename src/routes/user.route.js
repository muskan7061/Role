const {user, loginUser} = require("../controllers/user.controller")
const {authenticate, authorize} = require("../middlewares/auth.middlware")
const express = require("express")
const router = express.Router()


router.post("/user", user)
router.post("/login", loginUser)

// Only student and college can access
router.get('/student', authenticate, authorize(['dfhdwhdf']), (req, res) => {
    res.send(`Hello Student ${req.user.username}`);
  });
  
  
// Only college can access
router.get('/college', authenticate, authorize([ "student", 'college']), (req, res) => {
    res.send(`Hello College Admin ${req.user.username}`);
  });
module.exports = router
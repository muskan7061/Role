const dotenv = require("dotenv")
const express = require("express")
const sequelize = require("./config/db")
const userRouter  = require("./routes/basic/user.route")
const multiRole = require("./routes/multipleRole/registerUser.route")
dotenv.config({path: "./.env"})
require("./models/index")

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/role", userRouter)
app.use("/api/v1/multi-role", multiRole)


sequelize.sync({force: true})
.then(() =>{ console.log("Sync successfully");
})
.catch(() =>{ console.log("Failed to sync");
})



app.listen(process.env.PORT, () =>{
    console.log("App is listing on ", process.env.PORT);
    
})
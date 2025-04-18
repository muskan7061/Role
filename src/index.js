const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const express = require("express")
const sequelize = require("./config/db")
const userRouter  = require("./routes/user.route")
dotenv.config({path: "./.env"})


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/role", userRouter)


// sequelize.sync({alter: true})
// .then(() =>{ console.log("Sync successfully");
// })
// .catch(() =>{ console.log("Failed to sync");
// })



app.listen(process.env.PORT, () =>{
    console.log("App is listing on ", process.env.PORT);
    
})
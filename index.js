require("dotenv").config()
// or use
// require("dotenv").config({path: './env'})
const express = require("express")
const connectDB = require("./src/db/db"); 
const app = express()

// user database connectivity
connectDB()







// const {DB_NAME} = require('./src/constant')
// ( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("error:", error);
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is running on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.log("Error:", error)
//         throw err
//     }
// })


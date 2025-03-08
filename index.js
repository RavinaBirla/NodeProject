require("dotenv").config()
const app = require("./src/app"); 
const connectDB = require("./src/db/db"); 


// user database connectivity
app.on("error", (error)=>{
    console.log("error:", error);
    throw error
}),


connectDB()
.then(
    app.listen(process.env.PORT || 4001, ()=>{
        console.log(`server is ruuning on port ${process.env.PORT}`)
    })
)
.catch((error) =>{
    console.log("connection failed")
}
)





// require("dotenv").config({path: './env'})
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


const mongoose = require("mongoose")
const { DB_NAME } = require("../constant")



const connectDB = async ()=>{
    try{
        const connection =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        // console.log(connection)  
        console.log(`database connected ${connection.connection.host}`);
    }
    catch(error){
        console.log("connection error", error);
        process.exit(1)
    }
}

module.exports = connectDB;
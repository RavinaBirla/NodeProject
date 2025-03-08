const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()
app.use((cors({
    origin: process.env.CORS_ORIGINE,
    credentials: true 
})))

// middelware , express.json used insteand of body-parser
app.use(express.json({limit: "16kb"}))

// use for encoded the url data in extended use for nexted object
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// use for static files like pdf 
app.use(express.static("public"))

// use for access the user's cookies and set the cookies
app.use(cookieParser)

module.exports = app 
const express = require("express");
const connect = require("./config/database");
const authRoute=require("./routes/authRoute")
const hotelsRoute=require("./routes/hotelsRoute")
const roomsRoute=require("./routes/roomsRoute")
const usersRoute=require("./routes/usersRoute")

const app = express();
const env=require("dotenv").config()
connect()
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/users",usersRoute)

app.listen(5006, console.log('server is running on http://localhost:5006'));

const express = require("express")
const mongoose =require("mongoose")
const app  =express()
const expresslayouts = require("express-ejs-layouts")


const indexRouter = require("./routes/index")
const userRouter = require("./routes/user")
require("dotenv").config();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
}); 



app.use(express.json({limit:"10mb"}))
app.set("view engine","ejs")
app.set("views",__dirname+"/views")
app.set("layout","layouts/layout")
app.use(expresslayouts)
app.use(express.static("public"))

app.use("/",indexRouter)
app.use("/user",userRouter)

app.listen(process.env.PORT || 3000,()=>{
    console.log(`app runing on port 3000`)
})

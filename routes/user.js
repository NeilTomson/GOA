const express = require("express")
const router = express.Router()
const User  =require("../models/user")
router.get("/",(req,res)=>{
res.render("user/index")
})

router.get("/new",(req,res)=>{
    res.render("user/new",{user : new User()})
})

router.post("/",(req,res)=>{
    res.send(req.body.name)
})
module.exports=router

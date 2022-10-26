const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        require:true
    }

})

module.exports =mongoose.model("User",userSchema)
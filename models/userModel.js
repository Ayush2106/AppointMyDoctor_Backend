const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is Required']
    },
    email:{
        type:String,
        required:[true,'Email is Required']
    },password:{
        type:String,
        required:[true,"Password is required"]
    },isAdmin:{
        type:Boolean,
        default:false
    },
    isDoctor:{
        type:Boolean,
        default:false
    },notification:{
        type:Array,
        default:[]
    },seennotification:{
        type:Array,
        default:[]
    }
})

const userModel = mongoose.model("user",userSchema)
module.exports = userModel
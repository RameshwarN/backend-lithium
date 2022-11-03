const { default: mongoose } = require("mongoose");


const userSchema=new mongoose.Schema({
    name:"String",
	balance:{
        type:Number,
        default:100
    },
	address:"String",
	age: Number,
 	gender: {
        type:"String",
        enum:["male","female","LGBT"],
    },
	isFreeAppUser:{
        type:String,
        default:false
    } 

},{timestamps:true})

module.exports=mongoose.model('userinfo',userSchema)
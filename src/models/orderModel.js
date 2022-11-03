

// const require=mongoose('mongoose')

const { default: mongoose } = require("mongoose")

const orderSchema=new mongoose.Schema({
    userId:"String",
	productId:"String",
	amount: Number,
	isFreeAppUser: Boolean, 
	date:String
},{timestamp:true})

module.exports=mongoose.model('order',orderSchema)
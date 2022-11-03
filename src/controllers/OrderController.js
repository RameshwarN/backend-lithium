
const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel=require("../models/productMdel")
// const { request } = require("express")

const createOrder = async function(req,res){
let data=req.body
console.log(data.amount)
let userId=data.userId
let productId=data.productId       
if (!userId) {
     return res.send({ msg: 'userId is mandatory in the request '})

}else if (!productId){
    return res.send("please enter valid productId")
}

let UserId= await userModel.findById(userId)
console.log(UserId)
let ProductId= await productModel.findById(productId)

if (!UserId) {
    return res.send("this user id is not found is user databse")
} else if (!ProductId){
    return res.send("this product id is not found in product database")

}//else { }

let tokan = req.headers.isfreeappuser
console.log(tokan)
let value= 0
if (tokan === 'true'){
    data.amount = value
    data.isFreeAppUser=tokan
    let savedData= await orderModel.create(data)
    res.send({data:savedData})
}

else if (UserId.balance>=ProductId.price){
    await userModel.findOneAndUpdate({ _id:userId},{$set:{balance:UserId.balance-ProductId.price}})
    data['amount']=ProductId.price
    data['isFreeAppUser']=req.headers.isfreeappuser;
    let savedData=await orderModel.create(data)
    res.send({msg:savedData})
}else {!(UserId.balance>=ProductId.price)
    res.send({msg:"insufficent balance"})

}




}
module.exports.createOrder= createOrder
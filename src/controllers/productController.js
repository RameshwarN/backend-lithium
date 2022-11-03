const productMdel = require("../models/productMdel")




const createProduct=async function (req,res,next){
     
    let data=req.body
    let saveddata=await productMdel.create(data)
    res.send(saveddata)
}

module.exports.createProduct=createProduct  
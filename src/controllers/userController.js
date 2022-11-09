const UserModel= require("../models/userModel")


const createUser= async function (req, res) {
    try{
    let data= req.body
    let savedData= await UserModel.create(data)
    res.status(201).send({msg: savedData})
    }
    catch (err){  
res.status(400).send({msg:err.message})
    }
};
 
const loggin= async function (req, res) {
    // try{
        let id=req.params.userId
        let pass=await UserModel.findById(id)
        if(!pass){
            res.status(200).send({msg:pass})
         }
        let email=req.body.emailId
    let allUsers= await UserModel.findOne({emailId:email},{})
    res.status(200).send({msg: allUsers})
    // }catch (err){
    //     res.status(404).send({msg:err.message})
    }


module.exports={createUser,loggin}


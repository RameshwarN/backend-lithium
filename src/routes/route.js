const express = require('express');
const router = express.Router();

const controler=require("../controllers/userController")

router.get('/login/:userId',controler.loggin)
router.post('/users',controler.createUser)
router.all("/*",function(req,res){res.send({msg:"path is wrong"})})

module.exports = router;

//importing external package
const express = require('express');
const underscore = require('underscore')
const nodemon=require('nodemon')
const router = express.Router();

//importing a custom module
const rr = require("../logger/logger")
const rrr=require("../util/helper")
const validator=require("../validator/formatter")


router.get('/test-me', function (req, res) {
    
    // console.log("The result of underscores examples api is : ", result)
    rr.abc()
    console.log("THIS IS PROBLEM NO 2 -->",rrr.Date(),rrr.batch())
   
    
    console.log("PROBLEM NO 3 ---->"+"  ",validator.arr())
    console.log("PROBLEM NO 4 ---->"+"  ",validator.lodashpackage())
    
    
    
    res.send(`Rameshwar sahebrao navathar!
    i am become a ias officer`)

   


    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});


module.exports = router;


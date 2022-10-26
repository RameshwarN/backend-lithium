const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/creatBook", BookController.createBook  ) 

router.get("/getBooksData", BookController.getBooksData)


router.get("/bookList",BookController.getAuthor)
router.get('/getBooksInYear',BookController.alllist)
router.get('/getParticularBooks',BookController.getParticularBooks)
router.get('/getXINRBooks',BookController.getXINRBooks)
router.get('/getRandomBooks',BookController.getRandomBooks ) 
module.exports = router;    
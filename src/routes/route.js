const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

//::::::::::::::::::::::::::::::::::::::::::1::::::::::::::::::::::::::::::::::::::::::::::::::::::::

router.get('/film',function(req,res){
let movies=["A Beautiful Mind","Good Will Hunting ","MILLION DOLLAR BABY","THE SHAWSHANK REDEMPTION"]


    res.send({massage:"world best motivational film",movies})
})
//.........................................2........3...................................................

router.get('/movies/:indexNumber',function(req,res){

    let param=req.params.indexNumber
   const movies=["Rang de basanti","The shining","Lord of the rings","Batman begins"]
  let b=movies[param]
   if(movies.length > param ){
       res.send(b)
   }else{
       res.send("this data is not valid")
   }})

   //...........................................4.................................................
   router.get('/films',function (req,res){

        const films=[ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }] 
           res.send(films)
   })
//:.......................................5................................................

router.get('/filmsr/:filmId',function(req,res){
    const films=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       let param=req.params.filmId
       let a=films[param-1]
       if(films.length > param-1 ){
           res.send(a)
       }else{
           res.send("this data is not valid")
       }
})


module.exports = router;

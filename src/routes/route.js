const express = require('express');
// const { last } = require('underscore');
// const { result } = require('underscore');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName=[{'ram':22,'sham':33,'jay':99}]
    let  a= studentName.req.params.name
    
    console.log(a)
    res.send(a)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

router.post('/Ramaa',function(req,res){
    let arr=[22,"Navathar"]
    let ele=req.body.element
    let ele1=req.body.user
    arr.push(ele,ele1)

    res.send({arr})
});
//:::::::::::::::::::::::::::::::::::::::::::::::1:::::::::::::::::::::::::::::::::::::::::::::::::::
router.get("/sol1", function (req, res) {
    
    let arr= [1,2,3,4,6,7]
    let n=arr.length+1
    let missingNumber=n*(n+1)/2//7*8/2=28
    sum=0
    for(i=0;i<arr.length;i++){
    sum+=arr[i]
    }
   let result=missingNumber-sum
   

    res.send( { data:result} );
    });


//:::::::::::::::::::::::::::::::::::::::::::::::2::::::::::::::::::::::::::::::::::::::::::::::;
    router.get("/sol12", function (req, res) {
    
        let arr= [33, 34, 36, 37, 38]

        let n=arr.length+1
        let missingNumber=n*(33+38)/2
        sum=0
        for(i=0;i<arr.length;i++){
        sum+=arr[i]
        }
       let result=missingNumber-sum
       
        res.send( { data:result} );
        });

//::::::::::::::::::::3:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [ 
               "soccer"
           ]
       },
   ]
   router.post("/digit", function (req, res) {
    
const body =req.body
const ram=players.find(x=>x.name===body.name)

if (ram){
    res.send({message:"pleyers allredy exist"})

}else{ 
    players.push(body)
    res.send(players)
}})



 

module.exports = router;
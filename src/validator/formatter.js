const lodash = require('lodash')

let array=function(){
    let strings="               Functionup                    "
    let trim=strings.trim()
    let lowercase=trim.toLowerCase()
    let uppercase=lowercase.toUpperCase()
return {
    trim, lowercase ,uppercase 
}
}
let lodash2=function(){
const month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
     let ram = lodash.chunk(month,3)
    

     let arr2=[1,3,5,7,9,11,13,15,17,19]
       let b= lodash.tail(arr2)

       const omprakash =[1,2,[2,3],[3,4],5,[5,6],[6,7]]
   let union=lodash.union(...omprakash)

let arr=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
   let frompair=lodash.fromPairs(arr)   
       return {
        ram,b,union,frompair
       }
}

module.exports.lodashpackage=lodash2
module.exports.arr=array
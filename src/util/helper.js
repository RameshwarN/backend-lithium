let date =function(){
    let date=new Date();
    let date2=date.getDate();
    let month=date.getMonth()+1
    let year=date.getFullYear();
    return [date2,month,year]
}

let batchinfo=function(){
    return "lithium, W3D3, the topic for today is Nodejs module system’"
}
module.exports.batch=batchinfo
module.exports.Date=date
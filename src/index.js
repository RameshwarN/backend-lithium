const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Rameshwar:f8DhVaFG52IaRaDl@rameshwar-n.wdhggi2.mongodb.net/Rameshwar?retryWrites=true&w=majority", {
    useNewUrlParser: true
})  
.then( () => console.log("Database is connected"))
.catch ( err => console.log(err) )



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

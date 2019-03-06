
const express = require('express')
const mongos = require('mongoose')
const app =  express();
require('./models/users')
const userRouter = require('./routes/user_routes.js')

mongos.connect('mongodb://localhost:27017/test',(err)=>{
    if (err) console.log(err);
    console.log("server is on");
})

app.listen(3000);


app.use(express.urlencoded());
app.set('view engine','ejs')
app.set('views','./views')
app.use('/users' , userRouter );


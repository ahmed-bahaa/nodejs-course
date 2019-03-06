
const express = require('express')
const mongos = require('mongoose')
const app =  express();
app.listen(4000)


const user_router = require('./routes/user-routes.js')
const post_router = require('./routes/post-routes.js')

mongos.connect('mongodb://localhost:27017/test2',(err)=>{
    if (err) console.log(err);
    console.log("server is on");
})





app.use(express.urlencoded())

app.use('/users' , user_router )
app.use('/posts' , post_router )



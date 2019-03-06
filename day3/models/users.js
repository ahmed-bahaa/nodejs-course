const mongos = require('mongoose');


const userSchema = new mongos.Schema({
    fname: String,
    lname: String,
    email: String,
    age: String
});

const userModel = mongos.model("user", userSchema );


module.exports=userModel;
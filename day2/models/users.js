const mongos = require('mongoose');


const userSchema = new mongos.Schema({
    name: String,
    age: String
});

const userModel = mongos.model("user", userSchema );




module.exports=userModel;
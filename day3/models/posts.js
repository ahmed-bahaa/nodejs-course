const mongos = require('mongoose');


const postSchema = new mongos.Schema({
    title: String,
    body: String,
    userId: { type: mongos.Schema.Types.ObjectId , ref: 'users'}
});

const postsModel = mongos.model("post", postSchema );

// postsModel.create({ title:"post 1" , body:"hello" , userId:"5c7eddedbcacb34a42a33ace"})
// postsModel.create({ title:"post 2" , body:"hello" , userId:"5c7eddedbcacb34a42a33ace"})



module.exports=postsModel;
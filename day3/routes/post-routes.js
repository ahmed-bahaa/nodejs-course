const express = require('express')
const router2 = express.Router()
const userModel = require('../models/users.js')
const postModel = require('../models/posts.js')


router2.get( '/:id/user', async(req,res)=>{
    try{      
        //console.log(req.body.fname)
        const p = await postModel.findOne({_id:req.params.id}).populate('user')
        const user = await userModel.findById(p.userId)
        res.json(user.fname);

    }
    catch( err ){
        console.log( err )
    }

})



module.exports=router2;

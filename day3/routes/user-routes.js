const express = require('express')
const router = express.Router()
const userModel = require('../models/users.js')
const postModel = require('../models/posts.js')


router.get( '/', async(req,res)=>{
    try{
        const users = await userModel.find({})
        res.json(users);
    }
    catch( err ){
        console.log(err)
    }
});

router.post( '/', async(req,res)=>{
    try{
        
        //console.log(req.body.fname)
        const new_user = await userModel.create({ fname:req.body.fname ,lname:req.body.lname,email:req.body.email, age:req.body.age})
        const users = await userModel.find({}) 
        res.json(users);
    }
    catch( err ){
        console.log( err )
    }

})

router.delete( '/:id', async(req,res)=>{
    try{      
        console.log(req.params.id)
        const deleted_user = await userModel.findByIdAndRemove(req.params.id.replace(":",""))
        const users = await userModel.find({}) 
        res.json(users);
    }
    catch( err ){
        console.log( err )
    }

})

router.put( '/:id', async(req,res)=>{
    try{      
        //console.log(req.body.fname)
        const updated_user = await userModel.findByIdAndUpdate( req.params.id.replace(":",""), req.body ,{new: true} )
        const users = await userModel.find({}) 
        res.json(users);
    }
    catch( err ){
        console.log( err )
    }

})

router.get( '/:id', async(req,res)=>{
    try{      
        //console.log(req.body.fname)
        const user = await userModel.findById(req.params.id.replace(":",""))
        res.json(user);
    }
    catch( err ){
        console.log( err )
    }

})

router.get( '/:id/posts', async(req,res)=>{
    try{      
        //console.log(req.body.fname)
        const user = await postModel.find({userId:req.params.id})
        res.json(user);
    }
    catch( err ){
        console.log( err )
    }

})


module.exports=router;
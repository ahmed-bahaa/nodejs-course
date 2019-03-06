const express = require('express')
const userModel = require('../models/users.js')
const router = express.Router()


router.get( '/',(req,res)=>{
    // res.send("list users")
    userModel.find({}, (err,docs)=>{
        if(err) {console.log(err)}
        res.render('pages/table.ejs',{
            users:docs
        })
    });
});

router.get( '/new',(req,res)=>{
    //res.send("add new user");
    res.render('pages/form.ejs')
})

router.get( '/:id', (req,res)=>{
    
    userModel.findById(req.params.id.replace(":",""),  (err, user)=> {
        if (err) {console.log(err)};
        res.send(user);
      }) })

router.get( '/:id/delete',(req,res)=>{
    //res.send("delete user");
    userModel.findByIdAndRemove(req.params.id.replace(":",""),  (err, deleted_user)=> {
    if (err) {console.log(err)};
    userModel.find({}, (err,docs)=>{
        if(err) {console.log(err)}
        res.render('pages/table.ejs',{users:docs})
    })   
    })
})

router.post( '/', (req,res)=>{
    userModel.create({ name:req.body.name , age:req.body.age},  (err, new_user)=> {
        if (err) {console.log(err)};
        userModel.find({}, (err,docs)=>{
            if(err) {console.log(err)}
            res.render('pages/table.ejs',{users:docs})
        })
    })
})

router.post( '/:id/edit',(req,res)=>{

    userModel.findByIdAndUpdate( req.params.id.replace(":",""), req.body ,{new: true} ,  (err, user_edited)=> {
        if (err) {console.log(err)};
        userModel.find({}, (err,docs)=>{
            if(err) {console.log(err)}
            res.render('pages/table.ejs',{users:docs})
        })
    })
})

router.get( '/:id/edit',(req,res)=>{

    userModel.findById(req.params.id.replace(":",""),  (err, user_edited)=> {
        if (err) {console.log(err)};
        res.render('pages/form.ejs',{data:user_edited})
    })
})

module.exports=router;
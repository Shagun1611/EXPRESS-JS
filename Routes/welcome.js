const express=require('express');
const router=express.Router();

router.get('/welcome',(req,res,next)=>{
        res.send("<h1> Welcome to India</h1>");
        console.log("Started!!!");
    })
    

    module.exports=router;
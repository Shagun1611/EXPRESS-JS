const express=require("express");
const router=express.Router();

router.get('/shop',(req,res,next)=>{
        res.send('<h1>What do you need from our shop</h1>')
    });
    module.exports=router;
const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/add-product',(req,res,next)=>{
        res.send('<h1>Product List</h1> <form action="https://localhost:4000/store-product" method="POST"> <input type="text" name="name" > <br> <input type="file"> <br> <button>send</button>')
        res.sendFile(path.join(__dirname,'../','add-product.html'));
    })
    
    router.post('/store-product',(req,res,next)=>{
        console.log('item name: ',req.body);
        res.send('Item received <br> <form action="/add-product" method="POST"> <button>BACK</button> ' )
    });

    

    module.exports=router;
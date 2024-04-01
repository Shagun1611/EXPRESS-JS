const express=require('express');
const router=express.Router();

router.get('/cricket',(req,res,next)=>{
        res.send('<h1>Your favourite Team</h1> <form action="http://localhost:4000/cricket-info" method="GET"> <input type="text" name="name" >  <br> <button>send</button>')
    })
    
    router.get('/cricket-info',(req,res,next)=>{
        console.log('item name: ',req.body);
        res.send('<img src="https://crictoday.com/wp-content/uploads/2023/02/CSK-2023.jpg" width="800px" height="500px">')
        res.send('Item received <br> <form action="/cricket" method="POST"> <button>BACK</button> ' )
    });

    

    module.exports=router;
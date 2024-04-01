//1st program

// const http=require('http');
// const express=require('express');
// const app=express();

// app.use(()=>{
//     console.log("Express is working fine!!");
// })

// const server=http.createServer(app);
// server.listen(3070,()=>console.log("server started"));


//2nd program
// const http=require('http');
// const express=require('express');
// const app=express();

// app.use((req,res,next)=>{                          // if we dont use next() next call back function will not execute
//     console.log("1st middleware!");
//     next();
// })

// app.use((req,res,next)=>{ 
//     console.log("last middleware!");
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("mit middleware!");
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("exit middleware!");
// })

// const server=http.createServer(app);
// server.listen(3070,()=>console.log("server started"));



// 3rd program

// const http=require('http');
// const express=require('express');
// const app=express();

// app.use((req,res,next)=>{                          // if we dont use next() next call back function will not execute
//     console.log("Jan");
//     next();
// })

// app.use((req,res,next)=>{ 
//     console.log("Feb");
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("March");

// })

// app.use((req,res,next)=>{
//     console.log("April");
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("May");
// })

// const server=http.createServer(app);
// server.listen(3070,()=>console.log("server started"));


// 4th program


// const http=require('http');
// const express=require('express');
// const app=express();

// app.use((req,res,next)=>{                          // if we dont use next() next call back function will not execute
//     console.log("Jan");
//     res.send("<h1> Its january</h1>");
//     next();
// })

// app.use((req,res,next)=>{ 
//     console.log("Feb");
//     res.send("Its Feb hurray!!")
//     next();
// })

// const server=http.createServer(app);
// server.listen(3070,()=>console.log("server started"));

// 5th program

// const http=require('http');
// const express=require('express');
// const app=express();

// app.use('/1',(req,res,next)=>{                          // if we dont use next() next call back function will not execute
//     console.log("Monday");
//     res.send("<h1>  It's Monday: Working day </h1>");
//     next();
// })

// app.use('/2',(req,res,next)=>{ 
//     console.log("Tuesday");
//     res.send("<h1>  It's Tuesday: Working day </h1>");
//     next();
// })

// app.use('/3',(req,res,next)=>{ 
//     console.log("Wednesday");
//     res.send("<h1>  It's Wednesday: Working day </h1>");
//     next();
// })

// app.use('/4',(req,res,next)=>{ 
//     console.log("Thrusday");
//     res.send("<h1>  It's Thrusday: Working day </h1>");
//     next();
// })

// app.use('/5',(req,res,next)=>{ 
//     console.log("Friday");
//     res.send("<h1>  It's Friday: Working day </h1>");
//     next();
// })
// app.use('/6',(req,res,next)=>{ 
//     console.log("Saturday");
//     res.send("<h1>  It's Saturday: Movie night </h1>");
//     next();
// })

// app.use('/7',(req,res,next)=>{ 
//     console.log("Sunday");
//     res.send("<h1>  It's Sunday: Holiday </h1>");
//     next();
// })
// const server=http.createServer(app);
// server.listen(3070,()=>console.log("server started"));


//7th program

// const express=require('express');
// const app=express();

// app.use('/third',(req,res)=>{
//     console.log("third happy");
//     res.send("<h1> Happy Happy happy</h1>");
// })


// app.use('/second',(req,res)=>{
//     console.log("second happy");
//     res.send("<h1> Happy Happy</h1>");
// })


// app.use('/',(req,res)=>{
//     console.log("first happy");
//     res.send("<h1> Happy</h1>");
// })

// app.listen(3000,()=>{
//     console.log("server started");
// });


//body - parser in express

//8th program                 //get method:-getting data  and post method:- send data
//he property to parse the information from one to another in body parser :- req.body

// const express=require("express");
// const app=express();
// const bodyParser=require("body-parser");

// app.use(bodyParser.urlencoded({extended:true}))

// app.get('/add-product',(req,res,next)=>{
//     res.send('<h1>Product List</h1> <form action="/store-product" method="POST"> <input type="text" name="name" > <br> <input type="file"> <br> <button>send</button>')
// })

// app.post('/store-product',(req,res,next)=>{
//     console.log('item name: ',req.body);
//     res.send('Item received <br> <form action="/add-product" method="POST"> <button>BACK</button> ' )
    
// })
// app.listen(2000,()=>console.log("Server started"));


/****************************module  Using Express Router *****************/

// const express=require("express");
// const app=express();

// const bodyParser=require("body-parser");
// const adminRoutes=require('./Routes/admin');
// const welcome=require('./Routes/welcome');
// // const shopRoutes=require('./Routes/shop');

// // user body-parser middleware to parse URL-encoded bodies
// app.use(bodyParser.urlencoded({extended:true}))

// //use AdminRoutes and shop routes as middleware
// app.use(adminRoutes);

// app.use(welcome);
// //app.use
// app.listen(4000,()=>console.log("Server started"));



//************************Error 404 not found *********************//

const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const adminRoutes=require('./Routes/admin');
const shopRoutes=require('./Routes/shop');
const welcome=require('./Routes/welcome');
const ipl=require('./Routes/ipl');


// app.use(adminRoutes); 
app.use('/lpu',adminRoutes);// In this we have used prefix lpu so before writing localhost:4000/add-product or something we have to used prefix lpu  localhost:4000/lpu/add-product
app.use(shopRoutes);
app.use(welcome);
app.use(ipl);

app.use((req,res,next)=>{
    res.status(404).send("<h1>You are typing wrong Url <h1>");
})

app.use(bodyparser.urlencoded({extended:true}))

app.listen((4000),()=>console.log("Server Started"));
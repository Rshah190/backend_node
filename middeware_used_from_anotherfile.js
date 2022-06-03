const express=require('express');
const app=express();

const reqFilter=require('./middleware/checkAgeMiddleware');
// Midlleware for whole routes
// app.use(reqFilter); 
// app.get('/home',(req,res)=>{
//     res.send('hello shah');
// })
// app.get('/contact',(req,res)=>{
//     res.send('hello rakesh');
// })
// app.get('/about',(req,res)=>{
//     res.send('hello kumar');
// })

// middleware for particular route we apply on about
app.get('/home',(req,res)=>{
    res.send('hello shah');
})
app.get('/contact',(req,res)=>{
    res.send('hello rakesh');
})
app.get('/about',reqFilter,(req,res)=>{
    res.send('hello kumar');
})
app.listen(4000);
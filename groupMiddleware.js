const express=require('express');
const app=express();

const reqFilter=require('./middleware/checkAgeMiddleware');
const route=express.Router();

// middleware for group of routes
route.use(reqFilter); 
app.get('/home',(req,resp)=>{
    resp.send('hello shah');
});
app.get('/contact',(req,resp)=>{
    resp.send('hello rakesh');
});
app.use('/',route); 
app.listen(9000);
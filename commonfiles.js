const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get('/login',(_,resp)=>{
    resp.render('login');
});
app.listen(4000);
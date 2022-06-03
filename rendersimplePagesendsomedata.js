const express=require('express');
const app=express();
app.set('view engine','ejs');

// app.get('/simplepage',(req,resp)=>{
//     resp.render('simplepage');
// });

// how we pass data to page
app.get('/profile',(req,resp)=>{
    const user={
        name:"Rakeshshah190@gamil.com",
        phone:"7006725818",
        city:"noida"
    }
    resp.render('profile',{user});
});
app.listen(4000);
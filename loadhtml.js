const express=require('express');
const app=express();
const path=require('path');
const dirPath=path.join(__dirname,'public')
app.use(express.static(dirPath));

app.listen(4000);
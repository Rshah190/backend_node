const express=require('express');
const app=express();
const path=require('path');
const dirPath=path.join(__dirname,'public');

app.get('',(_,resp)=>{
    resp.sendFile(`${dirPath}/about.html`);
});
app.get('*',(_,resp)=>{
    resp.sendFile(`${dirPath}/404.html`);
})
// app.use(express.static(dirPath));

app.listen(4000);
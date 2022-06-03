const express=require('express');
const app = express();
const multer=require('multer');

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb) // cb means call back
        {
           cb(null,'uploads');
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+"-"+Date.now()+".jpg");
        }
    })
}).single('user_file');



app.post('/uploadFile',upload,(req,res)=>{
res.send('file sending');
});

app.listen(5000);
const { ObjectId } = require('mongodb');
const dbConnect=require('./mongodbconfig');
const deleteData=async ()=>{
// console.log('delete api is called'); 
let db=await dbConnect();
console.log(db);
let result= await db.deleteMany({_id:ObjectId('629211452c899e1db340470f')});
console.log(result.acknowledged);
}
deleteData();
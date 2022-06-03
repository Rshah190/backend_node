const mongoose=require('mongoose');
const productSchema= new mongoose.Schema({
    name:String,
    brand:String,
    category:String,
    Price:Number,

}) ;
module.exports=mongoose.model('products',productSchema);
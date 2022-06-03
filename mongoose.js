const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// const saveInDB=async ()=>{
//     await mongoose.connect('mongodb://localhost:27017/eccomerce');
//     const ProductSch = new mongoose.Schema({
//         name: String,
//         price: Number,
//         category: String,
//         brand: String
//     });
//     const Product = mongoose.model('shops', ProductSch);  
//     let data = new Product({
//         name:"Note Pro",
//         price:12000,
//         brand:"Apple",
//         category:"Ios"
//     });
//     const result = await data.save();
       
//      console.log(result);    
    
// }
// saveInDB();

// const updateInDB=async ()=>{
//     await mongoose.connect('mongodb://localhost:27017/eccomerce');
//     const ProductSch = new mongoose.Schema({
//         name: String,
//         price: Number,
//         category: String,
//         brand: String
//     });
//     const Product = mongoose.model('shops', ProductSch);  
//     let data=await Product.updateOne(
//         {_id:ObjectId('629351b4681048b771fa5f1b')},
//         {
//             $set:{name:"rakesh shah"}
//         }
    
//     )
    
//     console.log(data);

// }
// updateInDB();

// const deleteInDB=async()=>{
//     await mongoose.connect('mongodb://localhost:27017/eccomerce');
//     const ProductSch = new mongoose.Schema({
//                 name: String,
//                 price: Number,
//                 category: String,
//                 brand: String
//             });
//     const Product = mongoose.model('shops', ProductSch);  
//         let data=await Product.deleteOne(
//             {_id:ObjectId('6293668751f662a8362ac2d9')},
          
        
//         )
        
//         console.log(data);
    
// }

// deleteInDB();

const findInDB=async()=>{
    await mongoose.connect('mongodb://localhost:27017/eccomerce');
    const ProductSch = new mongoose.Schema({
                name: String,
                price: Number,
                category: String,
                brand: String
            });
    const Product = mongoose.model('shops', ProductSch);  
        let data=await Product.find(
            {_id:ObjectId('62936671f193e9477ba9ef2c')},
          
        
        )
        
        console.log(data);
    
}

findInDB();